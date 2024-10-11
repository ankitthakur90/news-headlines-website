import React from 'react';

const LatestNews = ({ article }) => {
  return (
    <div className="latest-news">
      <h3>{article.title}</h3>
      <p>{article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer"><img src={article.urlToImage} alt={article.title} /></a>
      
    </div>
  );
};

export default LatestNews;
