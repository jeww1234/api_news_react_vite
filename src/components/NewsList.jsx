import React from "react";

const NewsList = ({ news }) => {
  if (!news || news.length === 0) return <p>뉴스가 없습니다.</p>;
  const mainNews = news[0];

  return (
    <div className="max-w-[1450px] mt-[-10vh] h-[3000px] mx-[auto]">
      <div className="flex head-news">
        <div className="head-news-img min-w-[50%]">
          <img
            src={mainNews.urlToImage}
            alt={mainNews.titles}
            className="w-[100%] object-cover h-full"
          />
        </div>

        <div className="head-news-text w-full max-w-[50%] bg-[white] p-[3vh] box-border">
          <h2 className="text-[2.5rem] m-[0px] p-[3vh] border-b w-[80%]"><a href="#" className="text-[black] no-underline hover:text-[#ff2c99]">{mainNews.title}</a></h2>
          <p className="text-[black] m-[0px] p-[3vh]">
            {mainNews.description}
          </p>
          <span
            href={mainNews.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline p-[3vh]"
          >
            {mainNews.publishedAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
