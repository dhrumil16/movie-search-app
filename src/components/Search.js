import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ setMovies }) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const searchMovies = async () => {
    try {
      const apiKey = '7c90bcf5'; // Your OMDB API key
      const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);

      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
      } else {
        setError('No movies found for your search.');
      }
    } catch (err) {
      setError('Something went wrong with the API request.');
      console.error('API error:', err);
    }
  };

  return (
    <div className="search-container">
      <h1>Movie Search</h1>
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
        />
        <button onClick={searchMovies}>Search</button>
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Search;
