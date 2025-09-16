import React from "react";
import CardNews from "./CardNews"
import PageNation from "./PageNation";

const NewsList = ({ news }) => {
  if (!news || news.length === 0) return <p>뉴스가 없습니다.</p>;
  const mainNews = news[0];

  return (
    <div className="max-w-[1450px] mt-[-14vh] mx-[auto]">
      <div className="flex head-news">
        <div className="head-news-img min-w-[50%]">
          <img
            src={mainNews.urlToImage}
            alt={mainNews.titles}
            className="w-[100%] object-cover h-[110%]"
          />
        </div>

        <div className="head-news-text w-full max-w-[50%] bg-[white] p-[3vh] box-border flex flex-col items-center">
          <h2 className="text-[3vw] m-[0px] p-[1vw] border-b">
            <a
              href="#"
              className="text-[black] no-underline hover:text-[#ff2c99]"
            >
              {mainNews.title}
            </a>
          </h2>
          <div className="w-[100%]">
            <p className="text-[black] text-[1.2vw] m-[0px] px-[1vw] py-[0.5vw] haed-news-description">
              {mainNews.content ? mainNews.content : "내용 없음 내용 없음 내용 없음"}
            </p>
            <span>{mainNews.source.name ? mainNews.source.name : "소스 없음"}</span>
            <span
              href={mainNews.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-[1vw] px-[1vw] head-news-date m-[0px]"
            >
              {mainNews.publishedAt}
            </span>
            
          </div>
        </div>
      </div>
      <CardNews news={news}/>
      <PageNation />
    </div>
  );
};

export default NewsList;
