import React from "react";
import Banner from "../assets/project.jpeg";

const VoteProposal = () => {
  return (
    <div className="bg-[#0e2433] lg:px-16 md:px-8 px-8 pt-12">
      <div className="text-white_variant font-mono t-12 pb-32">
        <div className="mb-12 text-xl">
          Members of Stable Bank DAO. Our mission is to support people's live
          and make them better. We scrutinize proposals/projects and vote the
          right project so that the general public can fund these projects.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_x, i) => {
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
                <div className="p-6">
                  <h1 className="text-2xl font-medium mb-2">PIG FARMING</h1>
                  <p className="mb-6">
                    This project is proposed to raise <strong>20 MATIC</strong>.
                  </p>

                  {/* There will be a conditional rendering here: to vote for reject or support, a rejected proposal or supported proposal */}

                  <div className="flex items-center justify-between">
                    <button className="bg-tertiary w-[100%] px-8 py-2 text-xl rounded">
                      Vote
                    </button>
                  </div>

                  {/* <button className="bg-tertiary w-[100%] px-8 py-2 text-xl rounded">
                    Rejected
                  </button>
                  <button className="bg-tertiary w-[100%] px-8 py-2 text-xl rounded">
                    Approved
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VoteProposal;
