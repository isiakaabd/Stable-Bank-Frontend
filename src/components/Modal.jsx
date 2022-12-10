import React, { Fragment, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import LoadingBtn from "./LoadingBtn";

export const DonateModal = ({
  setIsOpenDonateModal,
  setIsApreciationModal,
}) => {
  const [amount, setAmount] = useState(0);

  const loading = false;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ amount });

    setIsOpenDonateModal(false);

    setIsApreciationModal(true);
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
                  loading={loading}
                  loadingCopy={"Submitting"}
                  copy={"Submit"}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export const AppreciationModal = ({ setIsApreciationModal, amount }) => {
  return (
    <div className="the__modal__wrapper grid place-items-center z-10 fixed h-screen w-screen top-0 right-0">
      <div className="the__modal__item min-h-[300px] p-4 max-w-[450px] w-[100%] rounded-md text-white_variant font-mono">
        <div className="flex justify-end items-center ">
          <button onClick={() => setIsApreciationModal(false)}>
            <AiOutlineClose size={"24"} />
          </button>
        </div>

        <div className="text-2xl font-medium mt-6">
          Thank You for donating to Food Bank
        </div>

        <p className="text-lg mt-2">
          Check your appreciation NFT on <a href="#">Opensea.</a>
        </p>

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

  const loading = false;

  const handleSubmit = (e) => {
    e.preventDefault();
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
                  loading={loading}
                  loadingCopy={"Submitting"}
                  copy={"Submit"}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
