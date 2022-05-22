import React, {useState, useEffect} from 'react'
import { apiEntity } from './apiConfig';
import useApi from './useApi'

  function App() {

    const [movies, loading, error, handleNext] = useApi(apiEntity.popularMovies)

  return (
    <>
      <h1>Películas</h1>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {
        movies.map((movie) => (
          <div key = {movie.id}>
            <h2>{movie.title}</h2>
          </div>
        ))
      }
      <button onClick = {handleNext}>Next</button>
    </>
  );
}

export default App;
