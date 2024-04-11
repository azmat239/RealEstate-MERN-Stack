import classNames from "classnames";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Input from "./Input";

const MobileNavLinks = () => {
  const listClasses = classNames(
    "text-sm text-slate-300 shadow shadow-black w-36 p-2 rounded-md my-2 hover:bg-slate-800"
  );
  const [value, setValue] = useState("");
  return (
    <div className="mt-6">
      <ul className="flex flex-col justify-center items-center">
        <li className={listClasses}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={listClasses}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li className={listClasses}>
          <NavLink to="profile">Profile</NavLink>
        </li>
        <li className="sm:hidden">
          <Input
            placeholder="Enter Your Query"
            typeInput="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            classes="text-xs p-1 placeholder-slate-50 bg-slate-400 rounded-lg shadow-sm shadow-black focus:outline-none text-center"
          />
        </li>
      </ul>
    </div>
  );
};

export default MobileNavLinks;
