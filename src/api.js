const API_KEY = 'your News API key'; // Replace with your News API key
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export const fetchHeadlines = async (country = 'in') => {
  try {
    const response = await fetch(`${BASE_URL}?country=${country}&apiKey=${API_KEY}&pageSize=5`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch news headlines');
    }

    const data = await response.json();
    return data.articles;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchBusinessNews = async () => {
  try {
    const response = await fetch(`${BASE_URL}?country=us&category=business&apiKey=${API_KEY}&pageSize=5`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch business news');
    }

    const data = await response.json();
    return data.articles;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchTrendingNews = async () => {
  try {
    const response = await fetch(`${BASE_URL}?category=technology&apiKey=${API_KEY}&pageSize=5`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch trending news');
    }

    const data = await response.json();
    return data.articles;
  } catch (error) {
    throw new Error(error.message);
  }
};


export const fetchTechCrunchNews = async () => {
    try {
        const response = await fetch(`${BASE_URL}?sources=techcrunch&apiKey=${API_KEY}&pageSize=5`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch TechCrunch news');
        }
        
        const data = await response.json();
        return data.articles;
    } catch (error) {
        throw new Error(error.message);
    }
};



  