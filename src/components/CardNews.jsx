import React from "react";
import LimitedText from "./LimitedText";
import moment from "moment";
import "moment/locale/ko";

moment.locale("ko");

const CardNews = ({ uniqueNews }) => {
  console.log("uniqueNews", uniqueNews);
  return (
    <div className="grid grid-cols-3 gap-4 mt-[5vw] card-grid">
      {uniqueNews.map((news, idx) => (
        <div
          key={idx}
          className="card w-full min-h-[450px] flex flex-col p-[1vh] box-border"
        >
          <img
            src={
              news.urlToImage && news.urlToImage.trim() !== ""
                ? news.urlToImage
                : "/No_Image.jpg"
            }
            alt={news.title}
            className="card w-full max-h-[350px] min-h-[250px]"
            onError={(e) => {
              e.currentTarget.src = "/No_Image.jpg";
            }}
          />
          <div className="w-[100%]">
            <h3 className="text-center text-[2vh] hover:text-[#ff2c99]">
              {news.title}
            </h3>
            <div className="text-center text-[1.2vh] px-[2vh]">
              <LimitedText text={news.description} maxLength={200} />
            </div>
            <div className="text-center">
              <span className="text-[1.2vh] px-[2vh]">
                출처 : {news.source.name}
              </span>
              <span className="text-[1.2vh] px-[2vh] mb-[5vh]">
                {moment(news.publishedAt).fromNow()}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardNews;
