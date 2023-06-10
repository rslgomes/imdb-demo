import FilterableMovieTable from './FilterableMovieTable/FilterableMovieTable';
import moviesData from './data/MOVIES.json';

const MOVIES = moviesData.movies;

function App() {
  return <FilterableMovieTable movies={ MOVIES } />;
}
export default App;
