import React from "react";
import DAOMember from "../assets/icon.png";

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
          <button className="bg-tertiary px-8 py-2 text-xl rounded font-medium">
            Join DAO
          </button>
        </div>
      </div>

      {/* The part where approved user can mint token dao, this is will be visible only when the user has been approved */}
      {/* if this section is available, the one above will disappear and vice versa */}

      <div className="md:flex justify-between md:mt-12 mt-12">
        <div className="flex-1">
          <div className="text-xl">
            You are a member of Stable Bank DAO, mint token in order to be able
            to vote on a proposal
          </div>
        </div>

        <div className="mt-12 flex-1 flex justify-center items-center">
          <button className="bg-tertiary px-8 py-2 text-xl rounded font-medium">
            Mint DAO Token
          </button>
        </div>
      </div>

      <div className="text-white_variant font-mono mt-16 pb-32">
        <div className="mb-10 text-center text-3xl underline">DAO MEMBERS</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <img
            src={DAOMember}
            className="border border-tertiary p-6 text-xl rounded-full w-[100%]"
            alt="member of dao"
          />
          <img
            src={DAOMember}
            className="border border-tertiary p-6 text-xl rounded-full w-[100%]"
            alt="member of dao"
          />
          <img
            src={DAOMember}
            className="border border-tertiary p-6 text-xl rounded-full w-[100%]"
            alt="member of dao"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinDAO;
