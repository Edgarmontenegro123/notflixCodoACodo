import Homepage from './pages/Homepage';
import Layout from './components/Layout/Layout';


  function App() {

    // const [movies, loading, error, handleNext] = useApi(apiEntity.popularMovies);

  return (
    /* <Layout> */
      <Homepage />
    /* </Layout> */
  );
}

export default App;

/* <>
      <h1 className = {Styles.title}>Películas</h1>
      <button className = {Styles.button} onClick = {handleNext}>Next</button>
      {loading && <p className = {Styles.margin}>Cargando...</p>}
      {error && <p className = {Styles.margin}>{error}</p>}
      {
        movies.map((movie) => (
          <div key = {movie.id} className = {Styles.content}>
            <h3>{movie.title}</h3>
          </div>
        ))
      }
    </> */