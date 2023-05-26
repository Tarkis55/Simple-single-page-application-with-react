import React from "react";

function Button({ styles }) {
  return (
    <button
      type="button"
      className={`flex
  py-4 px-6 bg-orange-gradient font-poppins font-medium text-[18px] text-white
  outline-none ${styles} rounded-[10px] button-get`}
    >
      Be Tarkis
    </button>
  );
}

export default Button;
