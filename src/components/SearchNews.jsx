import React, { useState } from "react";

const SearchNews = ({ setUrl }) => {
  const API_KEY = "5ca19004f97f4f5f9d74d0fbb95b21dc";
  const [SearchState, setSearchState] = useState(false);
  const [keyword, setKeyword] = useState("");
  const showSearch = () => {
    console.log("Search");
    setSearchState(!SearchState);
  };

  const handleSearch = () => {
    if (keyword.trim() !== "") {
      setUrl(
        new URL(
          `https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=kr&q=${keyword}&apiKey=${API_KEY}`
        )
      );
      console.log("key", keyword)
    }
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
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
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
