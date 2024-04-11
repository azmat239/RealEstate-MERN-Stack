import React, { useState } from "react";
import Input from "./Input";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { IoMenu } from "react-icons/io5";
import { GiCrossMark } from "react-icons/gi";
import MobileNavLinks from "./MobileNavLinks";

const Header = () => {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  return (
    <header className="flex bg-slate-200 justify-between px-2 md:px-4 py-2 items-center rounded-b-lg">
      <div>
        <Logo />
      </div>
      <div className="hidden sm:block">
        <Input
          placeholder="Enter Your Query"
          typeInput="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          classes="placeholder-slate-400 bg-slate-200 px-4 py-2 rounded-lg shadow-sm shadow-black focus:outline-none focus:bg-slate-500"
        />
      </div>
      <div className="hidden md:block">
        <NavLinks />
      </div>
      <div className="flex md:hidden font-extrabold text-2xl relative">
        <button
          onClick={() => {
            setVisible((prev) => !prev);
          }}
        >
          <IoMenu />
        </button>
        <div
          className={`${
            visible ? "block" : "hidden "
          } absolute top-[-50%] right-[-35%] bg-slate-500 p-4 w-48 h-screen transition-all ease-in delay-150 transform`}
        >
          <button
            onClick={() => {
              setVisible((prev) => !prev);
            }}
            className="absolute top-3 right-2"
          >
            <GiCrossMark />
          </button>
          <MobileNavLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;
