import { ethers } from "ethers";
import React, { Fragment, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import { useContractWrite, useWaitForTransaction } from "wagmi";
import { DAO_ADDRESS, DAO_CONTRACT, sUSDC_CONTRACT } from "../config";
import LoadingBtn from "./LoadingBtn";
import CrowdFund from "../utils/abi/CrowdFund.json";

export const DonateModal = ({
  setIsOpenDonateModal,
  setIsApreciationModal,
  crowdFundAddress,
}) => {
  const [amount, setAmount] = useState(0);

  const {
    data: approveData,
    isError: approveError,
    isLoading: approveLoading,
    write: approve,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    ...sUSDC_CONTRACT,
    functionName: "approve",
    args: [crowdFundAddress, amount ? ethers.utils.parseEther(amount) : "0"],
  });

  const { isLoading: approveWaitLoading } = useWaitForTransaction({
    hash: approveData?.hash,
    onSuccess(data) {
      donateFund?.();
    },
    onError(error) {
      toast.error("Failed!");
    },
  });

  const {
    data: donateFundData,
    isError: donateFundError,
    isLoading: donateFundLoading,
    write: donateFund,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: crowdFundAddress,
    abi: CrowdFund.abi,
    functionName: "donateFund",
    args: [amount],
  });

  const { isLoading: donateFundWaitLoading } = useWaitForTransaction(
    {
      hash: donateFundData?.hash,
      onSuccess(data) {
        setIsApreciationModal(true);
        setIsOpenDonateModal(false);
      },
      onError(error) {
        toast.error(`Failed! ${error?.reason}`);
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    approve?.();
  };

  return (
    <Fragment>
      <div className="the__modal__wrapper grid place-items-center z-10 fixed h-screen w-screen top-0 right-0">
        <div className="the__modal__item min-h-[400px] p-4 max-w-[450px] w-[100%] rounded-md text-white_variant font-mono">
          <div className="flex justify-end items-center ">
            <button onClick={() => setIsOpenDonateModal(false)}>
              <AiOutlineClose size={"24"} />
            </button>
          </div>

          <div className="text-2xl font-medium">Food Bank</div>

          <p className="text-lg mt-2">
            Donate your money to support this honourable project.
          </p>

          <form
            className="mt-5 max-w-[650px] mx-auto border border-white p-4 rounded md:p-8"
            onSubmit={handleSubmit}
          >
            <div className="">
              <div className="md:relative">
                <label className="md:hidden font-medium">Amount</label>
                <input
                  type={"number"}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder=" "
                  className="w-full border p-3 text-dark border-primary focus:outline-none rounded"
                />
                <label className="hidden md:block pointer-events-none p-3 absolute top-0 left-0 opacity-50 text-tertiary font-semibold">
                  Amount
                </label>
              </div>

              <div className="flex items-center justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setIsOpenDonateModal(false)}
                  className="bg-red px-8 py-2 text-xl rounded font-semibold"
                >
                  Close
                </button>
                <LoadingBtn
                  loading={
                    approveWaitLoading ||
                    approveLoading ||
                    donateFundLoading ||
                    donateFundWaitLoading
                  }
                  loadingCopy={"Donating..."}
                  copy={"Donate"}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export const AppreciationModal = ({ setIsApreciationModal, name }) => {
  return (
    <div className="the__modal__wrapper grid place-items-center z-10 fixed h-screen w-screen top-0 right-0">
      <div className="the__modal__item min-h-[300px] p-4 max-w-[450px] w-[100%] rounded-md text-white_variant font-mono">
        <div className="flex justify-end items-center ">
          <button onClick={() => setIsApreciationModal(false)}>
            <AiOutlineClose size={"24"} />
          </button>
        </div>

        <div className="text-2xl font-medium mt-6">
          Thank You for donating to {name}
        </div>

        {/* <p className="text-lg mt-2">
          Check your appreciation NFT on <a href="#">Opensea.</a>
        </p> */}

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setIsApreciationModal(false)}
            className="bg-red px-8 py-2 text-xl rounded font-semibold mt-8 items-end"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export const JoinDAOModal = ({ setIsOpen }) => {
  const [name, setName] = useState("");

  const {
    data: approveDAOData,
    isError: approveDAOError,
    isLoading: approveDAOLoading,
    write: approveDAO,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    ...sUSDC_CONTRACT,
    functionName: "approve",
    args: [DAO_ADDRESS, ethers.utils.parseEther("10")],
  });

  const { isLoading: approveDAOWaitLoading } = useWaitForTransaction({
    hash: approveDAOData?.hash,
    onSuccess(data) {
      joinDAO?.();
    },
    onError(error) {
      toast.error("Failed!");
    },
  });

  const {
    data: joinDAOData,
    isError: joinDAOError,
    isLoading: joinDAOLoading,
    write: joinDAO,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    ...DAO_CONTRACT,
    functionName: "joinDAO",
    args: [name],
  });

  const { isLoading: joinDAOWaitLoading } = useWaitForTransaction({
    hash: joinDAOData?.hash,
    onSuccess(data) {
      toast.success("Successful!");
      setName("");
      setIsOpen(false);
    },
    onError(error) {
      toast.error("Failed!");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    approveDAO?.();
  };

  return (
    <Fragment>
      <div className="the__modal__wrapper grid place-items-center z-10 fixed h-screen w-screen top-0 right-0">
        <div className="the__modal__item min-h-[350px] p-4 max-w-[450px] w-[100%] rounded-md text-white_variant font-mono">
          <div className="flex justify-end items-center ">
            <button onClick={() => setIsOpen(false)}>
              <AiOutlineClose size={"24"} />
            </button>
          </div>

          <div className="text-2xl font-medium">Join Stable Bank DAO</div>

          <form
            className="mt-5 max-w-[650px] mx-auto border border-white p-4 rounded md:p-8"
            onSubmit={handleSubmit}
          >
            <div className="">
              <div className="md:relative">
                <label className="md:hidden font-medium">Name</label>
                <input
                  type={"text"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=" "
                  className="w-full border p-3 text-dark border-primary focus:outline-none rounded"
                />
                <label className="hidden md:block pointer-events-none p-3 absolute top-0 left-0 opacity-50 text-tertiary font-semibold">
                  Name
                </label>
              </div>

              <div className="flex items-center justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-red px-8 py-2 text-xl rounded font-semibold"
                >
                  Close
                </button>
                <LoadingBtn
                  loading={
                    approveDAOLoading ||
                    approveDAOWaitLoading ||
                    joinDAOLoading ||
                    joinDAOWaitLoading
                  }
                  loadingCopy={"Joining..."}
                  copy={"Join"}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
