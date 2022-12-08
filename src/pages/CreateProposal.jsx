import React, { useState } from "react";
import LoadingBtn from "../components/LoadingBtn";

const CreateProposal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [category, setCategory] = useState("");

  const loading =  null; // the loading state here will be declared later

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ title, description, amount, recipientAddress, category });
  };

  return (
    <div className="bg-primary lg:px-16 md:px-8 px-8 pt-12 pb-48 text-white_variant min-h-screen">
      <form
        className="mt-5 max-w-[650px] mx-auto border border-white p-4 rounded md:p-8"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl text-center underline mb-8">Create Proposal</h1>
        <div className="">
          <div className="mt-2 form-field">
            <label className="md:hidden font-medium">Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              placeholder=" "
              value={title}
              autoFocus
              className="w-full border p-3 text-dark border-primary focus:outline-none rounded"
            />
            <label className="hidden md:block text-tertiary font-semibold">
              Title
            </label>
          </div>

          <div className="mt-7 form-field">
            <label className="md:hidden font-medium">Description</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              placeholder=" "
              value={description}
              rows={4}
              className="w-full border p-3 text-dark border-primary focus:outline-none rounded"
            ></textarea>
            <label className="hidden md:block text-tertiary font-semibold">
              Description
            </label>
          </div>

          <div className="form-field mt-7">
            <label className="md:hidden font-medium">Amount</label>
            <input
              type={"number"}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder=" "
              className="w-full border p-3 text-dark border-primary focus:outline-none rounded"
            />
            <label className="hidden md:block text-tertiary font-semibold">
              Amount
            </label>
          </div>

          <div className="form-field mt-7">
            <label className="md:hidden font-medium">Recipient Address</label>
            <input
              type={"number"}
              value={recipientAddress}
              onChange={(e) => setRecipientAddress(e.target.value)}
              placeholder=" "
              className="w-full border p-3 text-dark border-primary focus:outline-none rounded"
            />
            <label className="hidden md:block text-tertiary font-semibold">
              Recipient Address
            </label>
          </div>

          <div className="form-field mt-5">
            <div className="font-medium">Recipient Address</div>
            <select
              name="category"
              className="w-[100%] p-3 rounded text-dark"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option defaultValue={""}>Select Title</option>
              <option value={"tech"}>Tech</option>
              <option value={"finance"}>Finance</option>
              <option value={"agriculture"}>Agriculture</option>
            </select>
          </div>

          <div className="mt-8">
            <LoadingBtn
              loading={loading}
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
