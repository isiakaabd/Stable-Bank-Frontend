import React from "react";
import { Link } from "react-router-dom";
import Banner from "../assets/icon.png";
import ProgressBar from "../components/ProgressBar";

const Proposals = () => {
  return (
    <div className="bg-primary lg:px-16 md:px-8 px-8 pt-12">
      <div className="text-white_variant font-mono t-12 pb-32">
        <div className="mb-12 text-xl">
          The list of proposals/projects that you can fund at Stable Bank DAO.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
            return (
              <div className="border border-tertiary text-xl rounded">
                <div className="border-b border-tertiary pb-2">
                  <img src={Banner} alt="banner" />
                </div>
                <Link to={`proposal/${1}`}>
                <div className="p-6">
                  <h1 className="text-2xl font-medium mb-2">PIG FARMING</h1>
                  <p className="mb-2">Agriculture Category</p>
                  <p className="mb-6">
                    <strong>20 MATIC</strong> OF <strong>40 MATIC</strong>{" "}
                    RAISED.
                  </p>

                  <ProgressBar percentage={"40"} />
                  <div className="flex justify-end text-base">40%</div>
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

export default Proposals;
