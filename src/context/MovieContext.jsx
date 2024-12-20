import React, { createContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const apiKey = "2db10540a1c9107d4f4c350578b872ab";

  // Función para cargar películas populares
  const fetchPopularMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-CO&page=1`
      );
      if (!response.ok) throw new Error("Failed to fetch popular movies.");
      
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Función para manejar la búsqueda de películas
  const handleSearch = async (term) => {
    setSearchTerm(term);
    setLoading(true);
    setError(null);
  
    if (term.trim() === '') {
      setLoading(false);
      fetchPopularMovies(); // Vuelve a cargar las películas populares si no hay término de búsqueda
      return;
    }
  
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${encodeURIComponent(term)}&page=1`
      );
      if (!response.ok) throw new Error("Failed to fetch movies.");
      
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Cargar películas populares al iniciar
  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ movies, loading, error, handleSearch }}>
      {children}
    </MovieContext.Provider>
  );
};
