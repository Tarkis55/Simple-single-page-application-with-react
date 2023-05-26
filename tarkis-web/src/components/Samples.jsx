import React from "react";
import styles from "../style";
import { quotes2 } from "../assets";

function Samples({ content, title }) {
  return (
    <div
      className="flex justify-between flex-col px-10 py-12
      rounded-[20px] max-w-[385px] md:mr-10 sm:mr-5 mr-0 my-5 sample-card"
    >
      <img
        src={quotes2}
        alt=""
        className="w-[42px] h-[27px] 
        object-contain"
      />
      <p
        className="font-poppins font-normal text-[18px]
        leading-[32px] text-white my-10"
      >
        {title}
      </p>
      <div className="flex flex-row ">
        <div className="flex flex-col ml-4">
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Samples;
