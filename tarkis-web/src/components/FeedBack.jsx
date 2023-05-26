import React from "react";
import styles, { layout } from "../style";
import { feedback } from "../constans";
import { star2 } from "../assets";

const FeedBackCard = ({ name, img, feedback, index, star }) => (
  <div
    className={` flex flex-row p-6 rounded-[20px] ${
      index !== feedback.length - 1 ? "mb-6" : "mb-0"
    } feedback-card `}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}
    bg-dimBlue`}
    >
      <img className="w-[70px] h-[70px] object-contain" src={img} alt="icon" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h3
        className="font-poppins font-semibold text-white text-[18px]
      leading-[23px] mb-1"
      >
        {name}
      </h3>
      <p
        className="font-poppins font-normal text-dimWhite text-[16px]
      leading-[24px] mb-1"
      >
        {feedback}
      </p>
      <div className="flex flex-row text-white ">
        {star}
        <img className="h-[25px] w-[25px]" src={star2} alt="" />
      </div>
    </div>
  </div>
);

function FeedBack() {
  return (
    <div>
      <section id="feedback" className={layout.section}>
        <div className={`${layout.sectionInfo} ${styles.flexCenter}`}>
          <h2 className={styles.heading4}>
            Some <br className="sm:block hidden" />
            <span className="text-gradient">Feedback </span>
            about us.
          </h2>
        </div>
        <div className={`${layout.sectionImg} flex-col`}>
          {feedback.map((feature, index) => (
            <FeedBackCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </section>
      <div className="border-t-[1px] border-dimWhite w-full"></div>
    </div>
  );
}

export default FeedBack;
