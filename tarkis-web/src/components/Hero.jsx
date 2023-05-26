import React from "react";
import styles from "../style";
import { banner } from "../assets";

function Hero() {
  return (
    <div>
      <div className="border-t-[3px] border-t-orange-600 w-full"></div>
      <div
        id="home"
        className={`${styles.paddingX} flex md:flex-row flex-col flex-1
    xl:px-10 sm:px-6`}
      >
        <div className="mt-[24px]">
          <div className="flex flex-col">
            <h2 className={`${styles.heading2} ${styles.paddingY}`}>
              Tarkis
              <br className="sm:block hidden" />
              <span className="text-gradient ">holding</span>
              <br className="sm:block hidden" />
              More than
              <br className="sm:block hidden" />
              one
              <span className="text-gradient "> company</span>
            </h2>
            <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
              Ex occaecat sint est ea aute. Veniam pariatur elit est officia
              consectetur ut consectetur aliquip magna incididunt. Consectetur
              ea est fugiat reprehenderit velit tempor ut officia enim velit.
              Reprehenderit eu duis voluptate enim ea anim commodo culpa. Ipsum
              adipisicing exercitation fugiat enim exercitation esse ipsum
              cupidatat cillum. Eu culpa mollit irure do ullamco ex irure
              aliquip. Ea commodo consequat do pariatur exercitation.
            </p>
          </div>
        </div>
        <div
          className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}
        >
          <img
            src={banner}
            alt="billing"
            className=" max-w-[80%] max-h-[80%] relative z-[5]"
          />
          <div className="absolute z-[0] w-[70%] h-[50%] rounded-[full] top-0 right-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
      </div>
      <div className="border-t-[3px] border-t-dimWhite m-5"></div>
    </div>
  );
}

export default Hero;
