import React from 'react';

const Favorites = ({ favorites }) => {
  return (
    <div className="favorites-container">
      <h2>Your Favorites</h2>
      <div className="movie-list">
        {favorites.map((movie, index) => (
          <div key={index} className="movie-item">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-info">
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
