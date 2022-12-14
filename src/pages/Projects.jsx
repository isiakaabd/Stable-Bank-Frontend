import { ethers } from "ethers";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContractRead, useContractReads } from "wagmi";
import Banner from "../assets/project.jpeg";
import { CROWDFUND_FACTORY_CONTRACT } from "../config";
import CrowdFund from "../utils/abi/CrowdFund.json";

const Projects = () => {
  const { data: returnCrowdfund, isLoading: returnCrowdfundLoading } =
    useContractRead({
      ...CROWDFUND_FACTORY_CONTRACT,
      functionName: "returnCrowdfund",
    });

  const init_tx_data = [];

  if (returnCrowdfund?.length > 0) {
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

  return (
    <div className="bg-[#0e2433] lg:px-16 md:px-8 px-8 pt-12">
      <div className="text-white_variant font-mono t-12 pb-32">
        <div className="mb-12 text-xl">
          The list of proposals/projects that you can fund at Stable Bank DAO.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {Array.isArray(proposals) &&
            proposals?.length > 0 &&
            proposals?.map((proposal, i) => {
              return (
                <div
                  key={i}
                  className="border-2 border-tertiary text-xl rounded-3xl"
                >
                  <div className="border-b-2 border-tertiary pb-2">
                    <img
                      src={Banner}
                      className="rounded-t-3xl w-[100%] h-[250px]"
                      alt="banner"
                    />
                  </div>
                  <Link to={`/proposal/${i}`}>
                    <div className="p-6">
                      <h1 className="text-2xl font-medium mb-2">
                        {proposal && proposal[0]}
                      </h1>
                      {/* <p className="mb-2">Agriculture Category</p> */}
                      <p className="mb-6">
                        <strong>
                          {proposal &&
                            ethers.utils.formatUnits(
                              proposal[2]?._hex,
                              18
                            )}{" "}
                          MATIC
                        </strong>{" "}
                        OF{" "}
                        <strong>
                          {proposal &&
                            ethers.utils.formatUnits(
                              proposal[1]?._hex,
                              18
                            )}{" "}
                          MATIC
                        </strong>{" "}
                        RAISED.
                      </p>

                      {/* <ProgressBar percentage={"40"} />
                      <div className="flex justify-end text-base">40%</div> */}
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
