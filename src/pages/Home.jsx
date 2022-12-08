import React from "react";
import { Link } from "react-router-dom";
import Banner from "../assets/polygon.avif";

const Home = () => {
  return (
    <div className="bg-primary lg:px-16 md:px-8 px-8 pt-12">
      <div className="lg:flex justify-between">
        <div className="lg:mt-8 lg:flex-1 text-white_variant">
          <div className="md:text-6xl text-5xl font-medium text-center lg:text-left">
            Make someone's life better by giving of yours!
          </div>

          <p className="text-center lg:text-left mt-6 text-2xl md:text-3xl">
            Donate cryptocurency to support any charity
          </p>

          <div className="flex justify-center lg:justify-start mt-4 mb-8 lg:mb-0">
            <Link
              to={"/proposals"}
              className="bg-tertiary px-8 py-2 text-xl rounded font-medium"
            >
              Explore
            </Link>
            <Link
              to={"/join-dao"}
              className="bg-tertiary px-8 py-2 text-xl rounded font-medium ml-4"
            >
              Join DAO
            </Link>
          </div>
        </div>
        <div className="lg:flex-1">
          <img src={Banner} width="100%" alt="charity" />
        </div>
      </div>

      <div className="text-white_variant font-mono mt-12 pb-32">
        <div className="mb-6 text-center text-3xl underline">WHAT WE DO</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="border border-tertiary p-6 text-xl rounded">
            Stable Bank DAO is an initiative raised up to raise funds for people
            to set up a project for a greater good and purpose.
          </div>
          <div className="border border-tertiary p-6 text-xl rounded">
            Stable Bank DAO is an initiative raised up to raise funds for people
            to set up a project for a greater good and purpose.
          </div>
          <div className="border border-tertiary p-6 text-xl rounded">
            Stable Bank DAO is an initiative raised up to raise funds for people
            to set up a project for a greater good and purpose.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
