import React, { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

function Search() {
  const { handleSearch } = useContext(MovieContext);
  const [searchTerm, setSearchTerm] = useState('');

  const onSearch = () => {
    if (searchTerm.trim() === '') {
      alert('Por favor, ingrese un término de búsqueda.');
      return;
    }
    handleSearch(searchTerm);
    setSearchTerm('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') onSearch();
  };

  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <div className="inputGroup">
        <input
          type="text"
          placeholder="Buscar una película..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="buttonGroup">
        <button type="button" onClick={onSearch}>Buscar</button>
        <button type="button" onClick={() => setSearchTerm('')}>Limpiar</button>
      </div>
    </form>
  );
}

export default Search;
