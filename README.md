News Headlines Website
Overview
This project is a responsive News Headlines Website that integrates with the <a href="https://newsapi.org/">News API</a> to display real-time news updates. The website fetches and displays the latest news headlines from various sources. The objective of this project is to demonstrate API integration, data fetching, and responsive design using React and Node.js. Caching has been implemented on the backend to reduce the number of API calls and enhance performance.


Features
- Fetches the latest news headlines using News API.
- Displays news headlines, sources, and publication dates.
- Responsive design for mobile and desktop.
- Implements error handling for API request failures.
  
Tech Stack

Frontend
- React: A modern JavaScript library used for building user interfaces.
- CSS: Custom styling for the news display and responsive design.

Backend
- Node.js: JavaScript runtime used for building the backend server.
- Express: Web framework for handling API requests.
- Fetch API: For fetching data from the <a href="https://newsapi.org/">News API</a>.
- In-Memory Caching: Implemented on the server to cache API responses.

Setup Instructions

Prerequisites
Ensure you have the following installed:
- Node.js (v14 or later)
- npm (Node Package Manager)
- Installation
  
Clone the repository:
- bash
Copy code
- [git clone Click here](https://github.com/ankitthakur90/news-headlines-website.git)
Navigate into the project directory:

bash \n
Copy code 
- cd news-headlines-website
Install the required dependencies:

bash\n
Copy code
- npm install
Obtain an API key from <a href="https://newsapi.org/">News API</a>:

Sign up at <a href="https://newsapi.org/">News API</a> to get your API key.
Replace 'YOUR_API_KEY' in server.js with your actual API key.
Running the Project
Start the backend server:

bash\n
Copy code
- npm run server
The backend server will be running on http://localhost:3000.

Start the frontend:

bash \n
Copy code\n
npm start\n

The website will be accessible at http://localhost:3000 in your browser.

API Integration :
The project uses the <a href="https://newsapi.org/">News API</a> to fetch real-time news headlines. The API endpoint used is /v2/top-headlines, and it retrieves the latest headlines from multiple sources.

Fetching News Data :
The website makes an asynchronous request to the /api/news endpoint on the server, which in turn calls the <a href="https://newsapi.org/">News API</a>
 using the Fetch API. The data is then cached for a specific time period (1 minute) to optimize performance.

Caching Mechanism :
An in-memory caching system is implemented to store the API response for 60 seconds. This reduces the number of API requests and improves the overall load time. If the cache expires or doesn't exist, a new request is made to the <a href="https://newsapi.org/">News API</a>

Error Handling :
In case the API call fails or there is a network issue, the user will see a friendly error message. The server returns appropriate status codes and messages if the news headlines cannot be fetched.


Key Components :
Navbar Component: The top navigation bar that includes a search bar, logo, and links. On mobile, it collapses into a hamburger menu.
Screenshots

Desktop View
 <img src="/Screenshot_Desktop.png" alt="Homepage of News Website" width="100%"/>

Mobile View
<img src="/Screenshot_mobile_view.png" alt="Homepage of News Website" width="100%"/>

Future Enhancements :
- Persistent Caching: Currently, the caching is in-memory, which clears upon server restart. A persistent caching solution using Redis or a database could be added.
- Search Functionality: A search feature could be implemented to allow users to search for news articles on specific topics.
- Category Filtering: Allow users to filter news by category, such as technology, sports, entertainment, etc.

Conclusion:
This project demonstrates the integration of a third-party API to fetch and display real-time news, while implementing efficient backend caching and error handling. The responsive design ensures a smooth user experience across various devices.

