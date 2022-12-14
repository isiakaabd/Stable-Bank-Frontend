import { ethers } from "ethers";
import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useAccount,
  useContractRead,
  useContractReads,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { AppreciationModal, DonateModal } from "../components/Modal";
import ProgressBar from "../components/ProgressBar";
import { CROWDFUND_FACTORY_CONTRACT, DAO_CONTRACT } from "../config";
import CrowdFund from "../utils/abi/CrowdFund.json";

const ProjectDetails = () => {
  const { id } = useParams();
  const { address } = useAccount();
  const [isOpenDonateModal, setIsOpenDonateModal] = useState(false);
  const [isApreciationModal, setIsApreciationModal] = useState(false);

  const { data: adminAddress, isLoading: adminAddressLoading } =
    useContractRead({
      ...DAO_CONTRACT,
      functionName: "Admin",
    });

  const { data: returnCrowdfund, isLoading: returnCrowdfundLoading } =
    useContractRead({
      ...CROWDFUND_FACTORY_CONTRACT,
      functionName: "returnCrowdfund",
    });

  const init_tx_data = [];

  if (returnCrowdfund.length > 0) {
    for (let i = 0; i < returnCrowdfund.length; i++) {
      init_tx_data.push(
        {
          address: returnCrowdfund[i],
          abi: CrowdFund.abi,
          functionName: "name",
        },
        {
          address: returnCrowdfund[i],
          abi: CrowdFund.abi,
          functionName: "targetAmount",
        },
        {
          address: returnCrowdfund[i],
          abi: CrowdFund.abi,
          functionName: "amountRaised",
        }
      );
    }
  }

  const { data: proposal } = useContractReads({
    contracts: init_tx_data,
  });

  const [proposals, setProposals] = useState([proposal]);

  const ProposalDetails = () => {
    return proposals.find((_x, i) => i == id);
  };

  const {
    data: withdrawData,
    isError: withdrawError,
    isLoading: withdrawLoading,
    write: withdraw,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: returnCrowdfund[id],
    abi: CrowdFund.abi,
    functionName: "withdraw",
    onError(error) {
      toast.error(error?.reason);
    },
  });

  const { isLoading: withdrawWaitLoading } = useWaitForTransaction({
    hash: withdrawData?.hash,
    onSuccess(data) {
      toast.success("Donation sent to recipient!");
    },
    onError(error) {
      toast.error("Failed!");
    },
  });

  console.log("AAAAAAAAAAAAA: ", ProposalDetails());
  return (
    <Fragment>
      <div className="bg-[#0e2433] text-white_variant lg:px-16 md:px-8 px-8 pt-12 min-h-screen">
        <div className="mb-8">
          <div className="hidden lg:flex flex-wrap items-center justify-between">
            {/* The in progress button will also be used for cancelled and completed */}
            {/* <button className="bg-tertiary px-8 py-2 text-xl rounded">
              IN PROGRESS
            </button> */}

            {address !== adminAddress && (
              <div className="">
                {/* <button className="bg-red px-8 py-2 text-xl rounded mr-4">
                  STOP PROJECT
                </button> */}
                <button
                  onClick={() => withdraw?.()}
                  className="bg-green px-8 py-2 text-xl rounded"
                >
                  SEND FUND
                </button>
              </div>
            )}

            <button
              onClick={() => setIsOpenDonateModal(true)}
              className="bg-tertiary px-8 py-2 text-xl rounded"
            >
              DONATE
            </button>
          </div>


          <div className="flex lg:hidden flex-wrap items-center justify-between">
            {/* <button className="bg-red px-12 py-2 text-xl rounded w-[100%]">
              STOP PROJECT
            </button>
            <button className="bg-tertiary px-14 py-2 text-xl rounded mt-4 w-[100%]">
              IN PROGRESS
            </button> */}

            {address == adminAddress && (

              <button
              onClick={() => withdraw?.()}
              className="bg-green px-16 py-2 text-xl rounded mt-4 w-[100%]"
              >
              {withdrawWaitLoading || withdrawWaitLoading
                ? "Loading..."
                : "SEND FUND"}
            </button>
                )}

            <button
              onClick={() => setIsOpenDonateModal(true)}
              className="mt-4 bg-tertiary px-20 py-2 text-xl rounded w-[100%]"
            >
              DONATE
            </button>
          </div>
        </div>

        <div className="border border-tertiary"></div>

        <div className="mt-16 font-mono pb-48">
          <div className="md:flex">
            <div className="flex-1">
              <ul className="text-2xl">
                <li className="mb-2">
                  TITLE: <strong>{ProposalDetails()[0]}</strong>
                </li>
                {/* <li className="mb-2">
                  CATEGORY: <strong>Agriculture</strong>
                </li> */}
                <li className="mb-2">
                  AMOUNT RAISED:{" "}
                  <strong>
                    {" "}
                    {ProposalDetails() &&
                      ethers.utils.formatUnits(
                        ProposalDetails()[2]?._hex,
                        18
                      )}{" "}
                    MATIC
                  </strong>
                </li>
                <li className="mb-4">
                  EXPECTED AMOUNT:{" "}
                  <strong>
                    {" "}
                    {ProposalDetails() &&
                      ethers.utils.formatUnits(
                        ProposalDetails()[1]?._hex,
                        18
                      )}{" "}
                    MATIC
                  </strong>
                </li>
                {/* <li className="mb-2 w-[60%]">
                  <ProgressBar percentage={"40"} />
                  <p className="text-right text-base">40%</p>
                </li> */}
              </ul>
            </div>
            <div className="flex-1 mb-8">
              {/* <div className="underline text-3xl">DESCRIPTION</div>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ve ro
                sed id ducimus odio, obcaecati a corrupti ab, ipsam temporibus
                laudantium modi corporis necessitatibus. Cupiditate quos magnam
                harum nemo, quia culpa. Quo vel beatae commodi, ab quos
                corporis. Deserunt minima, quod sint suscipit placeat unde
                sapiente nisi, illum ipsa, similique autem rerum eligendi vitae!
                Repudiandae nam eos laudantium error soluta illo ipsam! Dicta
                necessitatibus id distinctio rerum molestias cumque inventore
                eligendi magni, unde impedit voluptatem quis, debitis vero
                tempore veniam voluptas ipsum consequuntur! Incidunt soluta
                doloribus voluptatum suscipit tempore necessitatibus numquam
                amet ipsam cupiditate corporis quo quisquam accusamus, aperiam
                ullam repellendus.
              </p> */}
            </div>
          </div>
        </div>
      </div>
      {isOpenDonateModal && (
        <DonateModal
          crowdFundAddress={returnCrowdfund[id]}
          setIsApreciationModal={setIsApreciationModal}
          setIsOpenDonateModal={setIsOpenDonateModal}
        />
      )}

      {isApreciationModal && (
        <AppreciationModal
          name={ProposalDetails()[0]}
          setIsApreciationModal={setIsApreciationModal}
        />
      )}
    </Fragment>
  );
};

export default ProjectDetails;
