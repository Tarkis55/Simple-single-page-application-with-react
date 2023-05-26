import React from "react";
import { navLinks } from "../constans/index";
import { tarkis } from "../assets";

function Navbar() {
  return (
    <div className="w-full flex py-6 justify-between items-center navbar">
      <img src={tarkis} alt="" className="w-[120px] h-[45px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer 
            text-[16px] text-white text-get
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
