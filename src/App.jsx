import { useState, useEffect } from "react";
import "./App.css";
import NewsList from "./components/NewsList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { data } from "autoprefixer";

//트라이 캐치

function App() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("");
  const [showSideNav, setShowSideNav] = useState("false");
  const [error, setError] = useState("");
  const API_KEY = "5ca19004f97f4f5f9d74d0fbb95b21dc";
  const pageSize = 5;
  const [page, setPage] = useState(1);

  const uniqueNews = news.filter(
    (item, index, self) =>
      index === self.findIndex((v) => v.title === item.title)
  );

  const randomIndex = Math.floor(Math.random() * uniqueNews.length);
  const mainNews = uniqueNews[randomIndex];
  //news_api url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  //noona url = "https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines"
  const [url, setUrl] = useState(
    new URL(
      `https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=kr&pageSize=30&category=${category}&apiKey=${API_KEY}`
    )
  );

  console.log("url", url);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (res.status === 200) {
          console.log("data", data);
          setNews(data.articles);
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        setError(error.message);
        setNews([]);
      }
    };
    fetchNews();
  }, [url]);
  console.log("News", news);

  useEffect(() => {
    if (category) {
      const newUrl = new URL(
        `https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=kr&pageSize=30&category=${category}&apiKey=${API_KEY}`
      );
      setUrl(newUrl);
    }
  }, [category]);

  return (
    <div className="flex flex-col items-center">
      <Header
        setUrl={setUrl}
        setCategory={setCategory}
        showSideNav={showSideNav}
        setShowSideNav={setShowSideNav}
        pageSize={pageSize}
        page={page}
        setPage={setPage}
      />
      <NewsList
        news={news}
        error={error}
        mainNews={mainNews}
        uniqueNews={uniqueNews}
        pageSize={pageSize}
        page={page}
        setPage={setPage}
      />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

//검색창
//사이드메뉴
