import React, { useState } from "react";

const SearchNews = () => {
  const [SearchState, setSearchState] = useState(false);
  const showSearch = () => {
    console.log("Search");
    setSearchState(!SearchState);
  };

  return (
    <div className="search-news-box text-[white] top-[10px] left-[45px] relative">
      <div className="flex items-center fixed">
        <div className="ms-[0.2vh] flex items-center max-h-[30px]">
          <img
            src="/돋보기.png"
            alt=""
            className="me-[0.5vh] max-h-[18px] bg-[#ff2c99] rounded-[3px] p-[3px] cursor-pointer"
            onClick={showSearch}
          />
        </div>
        <div className={SearchState ? "block" : "invisible"}>
          <input
            type="text"
            className="p-[3px] border-0 border-2 border-[#ff2c99]"
          />
          <button className="ms-[0.3vh] bg-[white] max-h-[30px] p-[3px]">
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchNews;
