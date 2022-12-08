import React from "react";
import { Link } from "react-router-dom";

const JoinDAO = () => {
  return (
    <div className="bg-primary text-white_variant lg:px-16 md:px-8 px-8 pt-12 min-h-screen">
      <div className="md:flex justify-between">
        <div className="flex-1">
          <div className="text-xl">
            This is Stable Bank DAO, this organisation is set up to empower and
            enrich the life of people by investing in project.
          </div>
          <div className="text-xl mt-4">
            Join our DAO to be part of the <i>Decisions Maker</i>
          </div>
        </div>


        <div className="mt-12 flex-1 flex justify-center items-center">
            <button className="bg-tertiary px-8 py-2 text-xl rounded font-medium">Join DAO</button>
        </div>
      </div>


      {/* The part where approved user can mint token dao, this is will be visible only when the user has been approved */}


      <div className="md:flex justify-between md:mt-48 mt-32 pb-32">
        <div className="flex-1">
          <div className="text-xl">
            You are a member of Stable Bank DAO, mint token in order to be able to vote on a proposal
          </div>
        </div>


        <div className="mt-12 flex-1 flex justify-center items-center">
            <button className="bg-tertiary px-8 py-2 text-xl rounded font-medium">Mint DAO Token</button>
        </div>
      </div>
    </div>
  );
};

export default JoinDAO;
