import { apiEntity } from './apiConfig';
import useApi from './useApi';

  function App() {

    const [movies, loading, error, handleNext] = useApi(apiEntity.popularMovies);

  return (
    <>
      <h1>Películas</h1>
      <button onClick = {handleNext}>Next</button>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {
        movies.map((movie) => (
          <div key = {movie.id}>
            <h3>{movie.title}</h3>
          </div>
        ))
      }
    </>
  );
}

export default App;
