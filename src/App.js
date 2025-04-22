import React, { useState } from 'react';
import Search from './components/Search';
import MovieList from './components/MovieList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Favorites from './components/Favorites';
import './App.css'; // Make sure this is here

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  return (
    <Router>
      <div className="App">
        <h1>Movie Search App</h1>
        <Search setMovies={setMovies} />
        <Routes>
          <Route path="/" element={<MovieList movies={movies} setFavorites={setFavorites} />} />
          <Route path="/favorites" element={<Favorites favorites={favorites} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
