import React, { useState } from "react";
import Nav from "./Nav";
import SearchNews from "./SearchNews";
import SideNav from "./SideNav";

const Header = ({
  setUrl,
  setCategory,
  showSideNav,
  setShowSideNav,
  page,
  setPage,
  pageSize,
}) => {
  const categoryList = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];
  return (
    <div className="bg-[black] relative">
      <div className="fixed">
        <div className="bg-[black] min-w-[1545px] h-[2.5vh] py-[1vh] flex items-center">
          <SideNav
            showSideNav={showSideNav}
            setShowSideNav={() => setShowSideNav((prev) => !prev)}
            setCategory={setCategory}
            categoryList={categoryList}
          />
          <SearchNews setUrl={setUrl} />
        </div>
      </div>
      <div className="head-box flex flex-col items-center min-h-[450px]">
        <img
          src="/logo-w-black.png"
          alt="head-logo"
          className="logo p-[0.5vh] box-border max-w-[70%] mt-[2vh]"
        />
        <div className="w-[5vh] h-[0.1vh] bg-[white] my-[1vh]"></div>
        <p className="text-[white] italic font-[serif] text-[0.8em]">
          A Magazine of Politics and Culture
        </p>
        <Nav
          setUrl={setUrl}
          setCategory={setCategory}
          categoryList={categoryList}
          page={page}
          setPage={setPage}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default Header;
