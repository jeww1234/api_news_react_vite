import { useState, useEffect } from "react";
import "./App.css";
import NewsList from "./components/NewsList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("");
  const [showSideNav, setShowSideNav] = useState(false);
  const API_KEY = "5ca19004f97f4f5f9d74d0fbb95b21dc";
  //news_api url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  //noona url = "https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines"
  const [url, setUrl] = useState(
    new URL(
      `https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=kr&category=${category}&apiKey=${API_KEY}`
    )
  );

  console.log("url", url);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log("data", data);
      setNews(data.articles);
    };
    fetchNews();
  }, [url]);
  console.log("News", news);

  useEffect(() => {
    if (category) {
      const newUrl = new URL(
        `https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=kr&category=${category}&apiKey=${API_KEY}`
      );
      setUrl(newUrl);
    }
  }, [category]);

  return (
    <div className="flex flex-col items-center">
      <Header setUrl={setUrl} setCategory={setCategory} showSideNav={showSideNav} setShowSideNav={setShowSideNav}/>
      <NewsList news={news} />
      <Footer />
    </div>
  );
}

export default App;

//검색창
//사이드메뉴
