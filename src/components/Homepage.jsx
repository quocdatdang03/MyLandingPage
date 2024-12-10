import React from "react";
import logoBestBuy from "../assets/images/logobestbuy.png";
import {
  faCircleCheck,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Homepage = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-tr from-blue-900 to-blue-400 px-5 pt-3 pb-7 relative">
        <div className="flex items-center justify-center">
          <img
            className="w-[12rem] h-[12rem] object-contain object-center"
            src={logoBestBuy}
            alt="logoBestBuy"
          />
          <div className="absolute top-[5px] left-[10px]">
            <h1 className="font-bold text-4xl text-white">750$</h1>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <h1 className="font-bold text-white text-2xl">Verified By Tiktok</h1>
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="text-[#42c5e4] text-3xl ml-1"
          />
        </div>
      </div>
      {/* Body */}
      <div className="p-4 flex flex-col items-center space-y-7">
        <div className="flex flex-col items-center gap-y-1 text-center">
          <h1 className="font-bold text-4xl text-black">
            Claim Your Sephora Credit below!
          </h1>
          {/* <h1 className="font-bold text-4xl text-black">below!</h1> */}
        </div>

        <div className="">
          <a
            className="inline-block bg-blue-500 text-black text-3xl font-bold px-[8px] py-4 rounded-md shadow-2xl hover:shadow-[0_10px_20px_rgba(0,0,0,0.6)] transition-shadow duration-300"
            href=""
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
            className="inline-block w-full rounded-3xl tracking-widest text-white bg-blue-600 text-3xl font-bold px-[8px] py-4 shadow-2xl hover:shadow-[0_10px_20px_rgba(0,0,0,0.6)] transition-shadow duration-300 uppercase"
            href="https://glstrck.com/aff_c?offer_id=163&aff_id=34712"
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
