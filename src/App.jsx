import { useState, useEffect } from "react";
import "./App.css";
import SearchNews from "./components/SearchNews";
import NewsList from "./components/NewsList";
import PageNation from "./components/PageNation";
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  const [url, setUrl] = useState(
    new URL("https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines")
  );
  const [news, setNews] = useState([]);
  console.log("url", url);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log("data",data)
      setNews(data.articles);
    };
    fetchNews();
  }, [url]);
  console.log("News", news);
  return (
    <div>
      <Header />
      <NewsList news={news}/>
      <SearchNews />
      <PageNation />
      <Footer />
    </div>
  );
}

export default App;
