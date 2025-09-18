import React, { useState } from "react";

const Nav = ({ setUrl, setCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectCategory = (e) => {
    setCategory(e.target.textContent.toLowerCase());
  };

  return (
    <div className="nav-btn-box mt-[2vh]">
      <div className="category p-[2vw] text-[white]">
        <a
          onClick={(e) => selectCategory(e)}
          className="p-[2.5vw] mt-[1.5vh] cursor-pointer"
        >
          Business
        </a>
        <a
          onClick={(e) => selectCategory(e)}
          className="p-[2.5vw] mt-[1.5vh] cursor-pointer"
        >
          Entertainment
        </a>
        <a
          onClick={(e) => selectCategory(e)}
          className="p-[2.5vw] mt-[1.5vh] cursor-pointer"
        >
          General
        </a>
        <a
          onClick={(e) => selectCategory(e)}
          className="p-[2.5vw] mt-[1.5vh] cursor-pointer"
        >
          Health
        </a>
        <a
          onClick={(e) => selectCategory(e)}
          className="p-[2.5vw] mt-[1.5vh] cursor-pointer"
        >
          Science
        </a>
        <a
          onClick={(e) => selectCategory(e)}
          className="p-[2.5vw] mt-[1.5vh] cursor-pointer"
        >
          Sports
        </a>
        <a
          onClick={(e) => selectCategory(e)}
          className="p-[2.5vw] mt-[1.5vh] cursor-pointer"
        >
          Technology
        </a>
      </div>
    </div>
  );
};

export default Nav;
