import React from 'react';

const MovieItem = ({ movie, addToFavorites }) => {
  return (
    <div className="movie-item">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <button onClick={() => addToFavorites(movie)}>Add to Favorites</button>
      </div>
    </div>
  );
};

export default MovieItem;
