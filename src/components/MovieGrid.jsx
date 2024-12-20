import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieCard from './MovieCard';

function MovieGrid() {
  const { movies, loading, error } = useContext(MovieContext);

  return (
    <div className="movieGrid">
      {loading ? (
        <p>Loading movies...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              releaseDate={movie.release_date}
              posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
          ))
        ) : (
          <p>No se encontraron películas.</p>
        )
      )}
    </div>
  );
}

export default MovieGrid;
