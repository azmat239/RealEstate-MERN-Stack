import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/" className="">
      <div className="shadow shadow-black p-1 md:py-2 md:px-3 rounded-lg hover:bg-slate-950 ">
        <span className="text-slate-800 font-extrabold text-lg sm:text-xl md:text-2xl hover:text-slate-200">
          Kash
        </span>
        <span className="text-slate-600 font-extrabold text-md sm:text-lg md:text-xl hover:text-slate-300">
          RealCite
        </span>
      </div>
    </NavLink>
  );
};

export default Logo;
