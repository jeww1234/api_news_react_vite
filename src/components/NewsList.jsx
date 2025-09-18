import React from "react";
import CardNews from "./CardNews";
import PageNation from "./PageNation";
import moment from "moment";
import "moment/locale/ko";

moment.locale("ko"); // 한국어로 설정

const NewsList = ({ news, error }) => {
  console.log("error", error);
  if (!news || news.length === 0)
    return (
      <div className="w-[100%] max-w-[1545px] h-[10vh] bg-[pink] flex items-center justify-center ">
        <p className="p-[0] m-[0] text-center">{error}</p>
      </div>
    );

  const uniqueNews = news.filter(
    (item, index, self) =>
      index === self.findIndex((v) => v.title === item.title)
  );

  const randomIndex = Math.floor(Math.random() * uniqueNews.length);
  const mainNews = uniqueNews[randomIndex];
  return (
    <div className="head-news-box max-w-[1450px] mt-[-14vh] mx-[auto] z-998">
      <div className="flex head-news min-h-[350px]">
        <div className="head-news-img min-w-[50%] min-h-[100%]">
          <img
            src={mainNews.urlToImage ? mainNews.urlToImage : "/No_Image.jpg"}
            alt={mainNews.titles}
            className="w-[100%] h-[100%]"
          />
        </div>

        <div className="head-news-text w-full max-w-[50%] bg-[white] p-[3vh] box-border flex flex-col items-center">
          <h2 className="text-[2vw] m-[0px] p-[1vw] border-b">
            <a
              href="#"
              className="text-[black] no-underline hover:text-[#ff2c99]"
            >
              {mainNews.title}
            </a>
          </h2>
          <div className="w-[100%] max-h-[550px]">
            <p className="text-[black] text-[1.2vw] m-[0px] px-[1vw] py-[0.5vw] haed-news-description">
              {mainNews.description
                ? mainNews.description
                : "내용 없음 내용 없음 내용 없음"}
            </p>
            <span>
              {mainNews.source.name ? mainNews.source.name : "소스 없음"}
            </span>
            <span
              href={mainNews.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-[1vw] px-[1vw] head-news-date m-[0px]"
            >
              {moment(mainNews.publishedAt).fromNow()}
            </span>
          </div>
        </div>
      </div>
      <CardNews uniqueNews={uniqueNews} />
      <PageNation />
    </div>
  );
};

export default NewsList;
