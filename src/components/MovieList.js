import React from 'react';

const MovieList = ({ movies, setFavorites }) => {
  return (
    <div className="movie-list-container">
      <h2>Search Results</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div className="movie-item" key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-info">
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <button onClick={() => setFavorites((prev) => [...prev, movie])}>
                Add to Favorites
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
