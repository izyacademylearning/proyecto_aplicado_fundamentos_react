import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import Search from './components/Search';
import MovieGrid from './components/MovieGrid';
import MovieDetails from './pages/MovieDetails';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <MovieProvider>
      <Router>
        <div className="App">
          <header className="titleHome">
            <Link to="/">
              <h1 className="title">IzyMovie</h1>
            </Link>
            <Search />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<MovieGrid />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
          </main>
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;
