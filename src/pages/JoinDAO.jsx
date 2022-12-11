import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Avatar1 from "../assets/avatar1.jpeg";
import { JoinDAOModal } from "../components/Modal";

const JoinDAO = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      {isOpen && <JoinDAOModal setIsOpen={setIsOpen} />}
      <div className="bg-[#0e2433] text-white_variant lg:px-16 md:px-8 px-8 pt-7 min-h-screen">
        <div className="mb-3 flex justify-end">
          <Link
            className="bg-tertiary px-8 py-2 text-xl rounded font-medium"
            to={"/approve-dao-member"}
          >
            Approve DAO Member
          </Link>
        </div>
        <div className="">
          <div className="text-center max-w-[800px] mx-auto">
            <div className="text-4xl">
            The governance of Stable Bank DAO is a decentralized autonomous organization governed by its members via a set of rules and protocols. Stable Bank DAO was founded and is managed by members who share a common goal or purpose. Stable Bank DAO was established to assist in the development of an open-source software project, as well as to fund and manage a charitable organization.
              
            </div>
            {/* <div className="text-xl mt-4">
              Join our DAO to be part of the <i>Decisions Maker</i>
            </div> */}
          </div>

          <div className="mt-12 flex justify-center items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-tertiary px-8 py-2 text-xl rounded font-medium"
            >
              Join DAO
            </button>
          </div>
        </div>

        {/* The part where approved user can mint token dao, this is will be visible only when the user has been approved */}
        {/* if this section is available, the one above will disappear and vice versa */}

        <div className="md:mt-12 mt-12">
          <div className="text-center">
            <div className="text-2xl max-w-[500px] mx-auto">
              You are a member of Stable Bank DAO, mint token in order to be
              able to vote on a proposal
            </div>
          </div>

          <div className="mt-12 flex-1 flex justify-center items-center">
            <button className="bg-tertiary px-8 py-2 text-xl rounded font-medium">
              Mint DAO Token
            </button>
          </div>
        </div>

        <div className="text-white_variant font-mono mt-16 pb-32">
          <div className="mb-10 text-center text-3xl underline">
            DAO MEMBERS
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <img
              src={Avatar1}
              className="border border-tertiary p-6 text-xl rounded-full w-[100%]"
              alt="member of dao"
            />
            <img
              src={Avatar1}
              className="border border-tertiary p-6 text-xl rounded-full w-[100%]"
              alt="member of dao"
            />
            <img
              src={Avatar1}
              className="border border-tertiary p-6 text-xl rounded-full w-[100%]"
              alt="member of dao"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default JoinDAO;
