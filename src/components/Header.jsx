import React, { useState } from "react";
import Nav from "./Nav";
import SearchNews from "./SearchNews";
import SideNav from "./SideNav";

const Header = ({ setUrl, setCategory, showSideNav, setShowSideNav }) => {
  return (
    <div className="bg-[black]  relative">
      <div>
        <SideNav showSideNav={showSideNav} setShowSideNav={()=>setShowSideNav(prev=>!prev)} setCategory={setCategory}/>
        <SearchNews setUrl={setUrl}/>
      </div>
      <div className="head-box flex flex-col items-center min-h-[450px]">
        <img
          src="/logo-w-black.png"
          alt="head-logo"
          className="logo p-[0.5vh] box-border max-w-[70%]"
        />
        <div className="w-[5vh] h-[0.1vh] bg-[white] my-[1vh]"></div>
        <p className="text-[white] italic font-[serif] text-[0.8em]">
          A Magazine of Politics and Culture
        </p>
        <Nav setUrl={setUrl} setCategory={setCategory} />
      </div>
    </div>
  );
};

export default Header;
