import { ethers } from "ethers";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContractWrite, useWaitForTransaction } from "wagmi";
import LoadingBtn from "../components/LoadingBtn";
import { DAO_CONTRACT } from "../config";

const CreateProposal = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [deadline, setDeadline] = useState("");

  const {
    data: createProposalData,
    isError: createProposalError,
    isLoading: createProposalLoading,
    write: createProposal,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    ...DAO_CONTRACT,
    functionName: "createProposal",
    args: [title, description, ethers.utils.parseEther(amount ? amount.toString() : "0"), new Date(deadline).getTime() / 1000],
  });

  const { isLoading: createProposalWaitLoading } = useWaitForTransaction({
    hash: createProposalData?.hash,
    onSuccess(data) {
      toast.success("Successful!");
      navigate("/fund-me")
    },
    onError(error) {
      toast.error("Failed!");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    createProposal?.();
  };

  return (
    <div className="bg-[#0e2433] lg:px-16 md:px-8 px-8 pt-12 pb-48 text-white_variant min-h-screen">
      <form
        className="mt-5 max-w-[650px] mx-auto border-2 border-tertiary p-4 rounded-2xl md:p-8"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl text-center underline mb-8">Create Proposal</h1>
        <div className="">
          <div className="mt-2 md:relative">
            <label className="md:hidden font-medium">Title</label>
            <input
              required
              onChange={(e) => setTitle(e.target.value)}
              placeholder=" "
              value={title}
              autoFocus
              className="w-full border p-3 text-dark border-primary focus:outline-none rounded"
            />
            <label className="hidden md:block pointer-events-none p-3 absolute top-0 left-0 opacity-50 text-[#0e2433] font-semibold">
              Title
            </label>
          </div>

          <div className="mt-7 md:relative">
            <label className="md:hidden font-medium">Description</label>
            <textarea
              required
              onChange={(e) => setDescription(e.target.value)}
              placeholder=" "
              value={description}
              rows={4}
              className="w-full border p-3 text-dark border-primary focus:outline-none rounded"
            ></textarea>
            <label className="hidden md:block pointer-events-none p-3 absolute top-0 left-0 opacity-50 text-[#0e2433] font-semibold">
              Description
            </label>
          </div>

          <div className="md:relative mt-7">
            <label className="md:hidden font-medium">Amount</label>
            <input
              required
              type={"number"}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder=" "
              className="w-full border p-3 text-dark border-primary focus:outline-none rounded"
            />
            <label className="hidden md:block pointer-events-none p-3 absolute top-0 left-0 opacity-50 text-[#0e2433] font-semibold">
              Amount
            </label>
          </div>

          <div className="md:relative mt-7">
            <label className="md:hidden font-medium">Deadline</label>
            <input
              required
              type={"date"}
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              placeholder=" "
              className="w-full border p-3 text-dark border-primary focus:outline-none rounded"
            />
            <label className="hidden md:block pointer-events-none p-3 absolute top-0 left-0 opacity-50 text-[#0e2433] font-semibold">
              Deadline
            </label>
          </div>

          {/* <div className="md:relative mt-5">
            <div className="font-medium">Category</div>
            <select
              name="category"
              className="w-[100%] p-3 rounded text-dark"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option defaultValue={""}>Select Category</option>
              <option value={"tech"}>Tech</option>
              <option value={"finance"}>Finance</option>
              <option value={"agriculture"}>Agriculture</option>
            </select>
          </div> */}

          <div className="mt-8 flex justify-center">
            <LoadingBtn
              loading={createProposalWaitLoading || createProposalLoading}
              loadingCopy={"Submitting.."}
              copy={"Submit"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProposal;
