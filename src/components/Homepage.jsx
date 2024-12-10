import React from "react";

const Homepage = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-[#de2125] flex flex-col items-center px-5 pt-3 pb-7">
        <h1 className="font-bold text-white text-4xl">DashCredit</h1>
        <h1 className="font-bold text-white text-4xl">Rewards</h1>
      </div>
      {/* Body */}
      <div className="p-4 flex flex-col items-center space-y-7">
        <div className="flex flex-col items-center gap-y-1 text-center">
          <h1 className="font-bold text-4xl text-black">
            Claim your Dash Credit
          </h1>
          <h1 className="font-bold text-4xl text-black">below!</h1>
        </div>

        <div className="">
          <a
            className="inline-block bg-[#de2125] text-black text-3xl font-bold px-[8px] py-4 rounded-md shadow-2xl hover:shadow-[0_10px_20px_rgba(0,0,0,0.6)] transition-shadow duration-300"
            href="https://dantri.com.vn/"
          >
            How it Works
          </a>
        </div>

        <div className="space-y-3 text-center">
          <h1 className="font-bold text-2xl">
            1. Click the "get yours" button below
          </h1>
          <h1 className="font-bold text-2xl">
            2. Enter your email and basic info
          </h1>
          <h1 className="font-bold text-2xl">
            3. Complete 2-3 deals *important* (most are quite fun, playing games
            etc)
          </h1>
          <h1 className="font-bold text-2xl">
            4. Claim your rewards & repeat anytime
          </h1>
        </div>

        <div className="w-full text-center">
          <a
            className="inline-block w-full rounded-3xl tracking-widest text-white bg-[#de2125] text-3xl font-bold px-[8px] py-4 shadow-2xl hover:shadow-[0_10px_20px_rgba(0,0,0,0.6)] transition-shadow duration-300 uppercase"
            href="https://baomoi.com/"
          >
            Get yours!
          </a>
        </div>

        <div>
          <h1 className="text-center font-bold text-black text-2xl">
            Please make sure to follow the rules and guidelines mentioned so you
            can redeem your rewards.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
