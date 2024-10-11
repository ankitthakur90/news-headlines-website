import React from 'react';
import './TrendingNews.css'; // Creating a new CSS file for common styling

const TrendingNews = ({ news }) => {
  return (
    <div className="trending-news-container">
      {news.map((item, index) => (
        <div key={index} className="trending-news-item">
          <h4 className="trending-news-title">{item.title}</h4>
          <p className="trending-news-meta">
            {item.author} - {new Date(item.publishedAt).toLocaleDateString()}
          </p>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.urlToImage && <img src={item.urlToImage} alt={item.title} className="trending-news-img" />}
          </a>
          <p className="trending-news-description">
            {item.description?.slice(0, 100)}... 
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="read-more">Read more</a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default TrendingNews;
