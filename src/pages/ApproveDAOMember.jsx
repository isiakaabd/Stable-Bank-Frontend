import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { DAO_CONTRACT } from "../config";

const ApproveDAOMember = () => {
  const [address, setAddress] = useState("");

  const { data: memberDetails, isLoading: memberDetailsLoading } =
    useContractRead({
      ...DAO_CONTRACT,
      functionName: "showAllDAOMemberDetails",
    });

  const {
    data: approveMemberData,
    isError: approveMemberError,
    isLoading: approveMemberLoading,
    write: approveMember,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    ...DAO_CONTRACT,
    functionName: "approveApplicant",
    args: [address],
  });

  const { isLoading: approveDAOWaitLoading } = useWaitForTransaction({
    hash: approveMemberData?.hash,
    onSuccess(data) {
      toast.success("Successful!");
    },
    onError(error) {
      toast.error("Failed!");
    },
  });

  console.log(address);

  const {
    data: rejectMemberData,
    isError: rejectMemberError,
    isLoading: rejectMemberLoading,
    write: rejectMember,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    ...DAO_CONTRACT,
    functionName: "rejectApplicant",
    args: [address],
  });

  const { isLoading: rejectDAOWaitLoading } = useWaitForTransaction({
    hash: rejectMemberData?.hash,
    onSuccess(data) {
      toast.success("Successful!");
    },
    onError(error) {
      toast.error("Failed!");
    },
  });

  const handleReject = (address) => {
    setAddress(address);

    setTimeout(() => {
      rejectMember?.();
    }, 0);
  };

  const handleApprove = (address) => {
    setAddress(address);

    setTimeout(() => {
      approveMember?.();
    }, 0);
  };

  return (
    <div className="bg-[#0e2433] text-white_variant lg:px-16 md:px-8 px-8 pt-12 min-h-screen">
      <h2 className="text-xl md:text-2xl font-mono mb-4">
        List of people requested to join DAO
      </h2>
      {Array.isArray(memberDetails) && memberDetails.length > 0 ? (
        memberDetails.map((member, i) => {
          return (
            <div
              key={i}
              className="flex items-center justify-between mb-4 flex-wrap"
            >
              <div className="text-xl font-medium">
                {member && member?.memberAddress}
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleReject(member?.memberAddress)}
                  className="bg-red px-4 py-1 text-xl rounded"
                >
                  Reject
                </button>
                <button
                  onClick={() => handleApprove(member?.memberAddress)}
                  className="bg-green px-4 py-1 text-xl rounded ml-4"
                >
                  Approve
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="">No Member available</div>
      )}

      {/* we may decide to remove this section later */}
      {/* <div className="pb-48">
        <h2 className="text-xl md:text-2xl font-mono mb-4 mt-16">
          List of DAO Members
        </h2>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_x, i) => {
          return (
            <div key={i} className="flex items-center justify-between mb-4 flex-wrap">
              <div className="text-xl font-medium">0x1234567890abcdef1234</div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default ApproveDAOMember;
