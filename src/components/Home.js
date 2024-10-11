import React, { useEffect, useState } from "react";
import { fetchBusinessNews, fetchTrendingNews, fetchTechCrunchNews } from "../api";
import LatestNews from "./LatestNews";
import TrendingNews from "./TrendingNews";
import "./Home.css";

const Home = () => {
  const [businessNews, setBusinessNews] = useState([]);
  const [trendingNews, setTrendingNews] = useState([]);
  const [techCrunchNews, setTechCrunchNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNewsData = async () => {
      try {
        const business = await fetchBusinessNews();
        setBusinessNews(business);
        const trending = await fetchTrendingNews();
        setTrendingNews(trending);
        const techCrunch = await fetchTechCrunchNews();
        setTechCrunchNews(techCrunch);
      } catch (err) {
        setError(err.message);
      }
    };
    getNewsData();
  }, []);

  return (
    <div className="home-container">
      <div className="left-side">
        <h3>Business News</h3>
        {error ? (
          <p>{error}</p>
        ) : (
          businessNews.map((article, index) => (
            <LatestNews key={index} article={article} />
          ))
        )}
      </div>

      <div className="middle">
        <h2>Trending News Worldwide</h2>
        <TrendingNews news={trendingNews} />
      </div>

      <div className="right-side">
        <h3>TechCrunch Articles</h3>
        {error ? (
          <p>{error}</p>
        ) : (
          techCrunchNews.map((article, index) => (
            <LatestNews key={index} article={article} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
