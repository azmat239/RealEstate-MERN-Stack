import classNames from "classnames";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavLinks = () => {
  const listClasses = classNames(
    "px-2 py-2 hover:bg-slate-600 hover:text-slate-200 rounded-md font-bold text-md bg-transparent shadow shadow-black transition-all ease-in-out delay-300 hover:scale-110"
  );
  return (
    <nav>
      <ul className="flex gap-4">
        <li className={listClasses}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={listClasses}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li className={listClasses}>
          <NavLink to="profile">Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
