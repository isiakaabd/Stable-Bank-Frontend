import React from "react";

const ApproveDAOMember = () => {
  return (
    <div className="bg-[#0e2433] text-white_variant lg:px-16 md:px-8 px-8 pt-12 min-h-screen">
      <h2 className="text-xl md:text-2xl font-mono mb-4">
        List of people requested to join DAO
      </h2>
      {[0, 1, 2, 3, 4, 5].map((_x, i) => {
        return (
          <div
            key={i}
            className="flex items-center justify-between mb-4 flex-wrap"
          >
            <div className="text-xl font-medium">0x1234567890abcdef1234</div>
            <div className="flex items-center">
              <button className="bg-red px-4 py-1 text-xl rounded">
                Reject
              </button>
              <button className="bg-green px-4 py-1 text-xl rounded ml-4">
                Accept
              </button>
            </div>
          </div>
        );
      })}

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
