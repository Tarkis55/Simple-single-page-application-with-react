import React from "react";
import styles from "../style";
import Samples from "./Samples";
import { we } from "../constans";
import Button from "./Button";

function WhatAreWe() {
  return (
    <div id="what">
      <div
        className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}
      >
        <div
          className="w-full flex justify-between items-center
    md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]"
        >
          <div className={`${styles.heading3} flex justify-ceter items-center`}>
            What is<span className="text-gradient">Tarkis</span>?
          </div>
          <p className={`${styles.paragraph} max-w-[600px] m-5`}>
            Incididunt tempor quis proident Lorem. Sunt ullamco reprehenderit
            magna qui minim. Eu Lorem do ea enim cillum. Incididunt sit nulla
            nostrud sit laborum culpa ex pariatur ad.
          </p>
        </div>
      </div>
      <div
        className="flex flex-wrap sm:justify-start 
      justify-center w-full feedback-container relative z-[1]"
      >
        {we.map((card) => (
          <Samples key={card.id} {...card}></Samples>
        ))}
      </div>
      <div className={`flex ${styles.flexCenter} mt-[25px] `}>
        <Button/>
      </div>
      <div className="border-t-[3px] border-t-dimWhite mt-[60px]"></div>
    </div>
  );
}

export default WhatAreWe;
