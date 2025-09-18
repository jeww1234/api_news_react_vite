import React, { useState } from "react";

const SideNav = ({ showSideNav, setShowSideNav, setCategory}) => {
  const selectCategory = (e) =>{
    setCategory(e.target.textContent.toLowerCase())
  }
  return (
    <div className="side-nav-box hidden">
      <img src="/사이드메뉴.png" alt="" onClick={setShowSideNav} className="cursor-pointer"/>

      <div>
        {/* 사이드 메뉴 */}
        <div className={`${showSideNav ? "block" : "hidden"} bg-[white] side-menu`}>
          <div className="flex justify-end p-[15px]">
            <button onClick={setShowSideNav} className="cursor-pointer">x</button>
          </div>
          <div className="flex flex-col items-center">
            <p onClick={(e)=>selectCategory(e)} className="text-[black] m-[0] p-[5px] cursor-pointer">Business</p>
            <p onClick={(e)=>selectCategory(e)} className="text-[black] m-[0] p-[5px] cursor-pointer">Entertainment</p>
            <p onClick={(e)=>selectCategory(e)} className="text-[black] m-[0] p-[5px] cursor-pointer">General</p>
            <p onClick={(e)=>selectCategory(e)} className="text-[black] m-[0] p-[5px] cursor-pointer">Health</p>
            <p onClick={(e)=>selectCategory(e)} className="text-[black] m-[0] p-[5px] cursor-pointer">Science</p>
            <p onClick={(e)=>selectCategory(e)} className="text-[black] m-[0] p-[5px] cursor-pointer">Sports</p>
            <p onClick={(e)=>selectCategory(e)} className="text-[black] m-[0] p-[5px] cursor-pointer">Technology</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
