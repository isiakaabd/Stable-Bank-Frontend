import React, { Fragment, useState } from "react";
import DAOMember from "../assets/icon.png";
import { AppreciationModal, DonateModal } from "../components/Modal";
import ProgressBar from "../components/ProgressBar";

const ProjectDetails = () => {
  const [isOpenDonateModal, setIsOpenDonateModal] = useState(false);

  const [isApreciationModal, setIsApreciationModal] = useState(false);

  return (
    <Fragment>
      <div className="bg-[#0e2433] text-white_variant lg:px-16 md:px-8 px-8 pt-12 min-h-screen">
        <div className="mb-8">
          <div className="hidden md:flex flex-wrap items-center justify-between">
            {/* The in progress button will also be used for cancelled and completed */}
            <button className="bg-tertiary px-8 py-2 text-xl rounded">
              IN PROGRESS
            </button>

            <div className="">
              <button className="bg-red px-8 py-2 text-xl rounded mt-4 mr-4">
                STOP PROJECT
              </button>
              <button className="bg-green px-8 py-2 text-xl rounded mt-4">
                SEND FUND
              </button>
            </div>
            <button
              onClick={() => setIsOpenDonateModal(true)}
              className="mt-4 bg-tertiary px-8 py-2 text-xl rounded"
            >
              DONATE
            </button>
          </div>

          <div className="flex md:hidden flex-wrap items-center justify-between">
            <button className="bg-red px-12 py-2 text-xl rounded mr-4">
              STOP PROJECT
            </button>
            <button className="bg-tertiary px-14 py-2 text-xl rounded mt-4 mr-4">
              IN PROGRESS
            </button>

            <button className="bg-green px-16 py-2 text-xl rounded mt-4">
              SEND FUND
            </button>

            <button
              onClick={() => setIsOpenDonateModal(true)}
              className="mt-4 bg-tertiary px-20 py-2 text-xl rounded"
            >
              DONATE
            </button>
          </div>
        </div>

        <div className="border border-tertiary"></div>

        <div className="mt-16 font-mono pb-48">
          <div className="md:flex">
            <div className="flex-1">
              <ul className="text-2xl">
                <li className="mb-2">
                  TITLE: <strong>Food Bank</strong>
                </li>
                <li className="mb-2">
                  CATEGORY: <strong>Agriculture</strong>
                </li>
                <li className="mb-2">
                  AMOUNT RAISED: <strong>15 MATIC</strong>
                </li>
                <li className="mb-4">
                  EXPECTED AMOUNT: <strong>25 MATIC</strong>
                </li>
                <li className="mb-2 w-[60%]">
                  <ProgressBar percentage={"40"} />
                  <p className="text-right text-base">40%</p>
                </li>
              </ul>
            </div>
            <div className="flex-1 mb-8">
              <div className="underline text-3xl">DESCRIPTION</div>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ve ro
                sed id ducimus odio, obcaecati a corrupti ab, ipsam temporibus
                laudantium modi corporis necessitatibus. Cupiditate quos magnam
                harum nemo, quia culpa. Quo vel beatae commodi, ab quos
                corporis. Deserunt minima, quod sint suscipit placeat unde
                sapiente nisi, illum ipsa, similique autem rerum eligendi vitae!
                Repudiandae nam eos laudantium error soluta illo ipsam! Dicta
                necessitatibus id distinctio rerum molestias cumque inventore
                eligendi magni, unde impedit voluptatem quis, debitis vero
                tempore veniam voluptas ipsum consequuntur! Incidunt soluta
                doloribus voluptatum suscipit tempore necessitatibus numquam
                amet ipsam cupiditate corporis quo quisquam accusamus, aperiam
                ullam repellendus.
              </p>
            </div>
          </div>
        </div>
      </div>
      {isOpenDonateModal && (
        <DonateModal
          setIsApreciationModal={setIsApreciationModal}
          setIsOpenDonateModal={setIsOpenDonateModal}
        />
      )}

      {isApreciationModal && (
        <AppreciationModal
          amount={"10"}
          setIsApreciationModal={setIsApreciationModal}
        />
      )}
    </Fragment>
  );
};

export default ProjectDetails;
