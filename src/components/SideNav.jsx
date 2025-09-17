import React, { useState } from "react";

const SideNav = ({ showSideNav, setShowSideNav }) => {
  return (
    <div className="side-nav-box hidden">
      <img src="/사이드메뉴.png" alt="" onClick={setShowSideNav} />

      <div>
        {/* 사이드 메뉴 */}
        <div className={`${showSideNav ? "block" : "hidden"} bg-[white] side-menu`}>
          <div className="flex justify-end p-[15px]">
            <button onClick={setShowSideNav}>x</button>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[black] m-[0] p-[5px]">Business</p>
            <p className="text-[black] m-[0] p-[5px]">Entertainment</p>
            <p className="text-[black] m-[0] p-[5px]">General</p>
            <p className="text-[black] m-[0] p-[5px]">Health</p>
            <p className="text-[black] m-[0] p-[5px]">Science</p>
            <p className="text-[black] m-[0] p-[5px]">Sports</p>
            <p className="text-[black] m-[0] p-[5px]">Technology</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
