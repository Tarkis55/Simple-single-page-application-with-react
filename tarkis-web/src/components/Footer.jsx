import React from "react";
import { socialMedia } from "../constans";
import styles from "../style";
import { tarkis } from "../assets";
import Button from "./Button";

function Footer() {
  return (
    <div
      id="footer  "
      className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
    >
      <div className={`${styles.flexCenter} flex-row mb-8 w-full`}>
        <div className="flex-1 flex flex-row justify-between items mr-10">
          <img
            src={tarkis}
            alt=""
            className="w-[262px] h-[72px] object-contain"
          />
          <button
            className={`${styles.flexCenter} flex py-4 px-6 bg-orange-gradient font-poppins font-medium text-[18px] text-white
  outline-none rounded-[10px] button-get`}
          >
            Be in touch
          </button>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            Best way to be...
          </p>
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2023 Tarkis. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
