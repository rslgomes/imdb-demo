import { Route, Routes } from 'react-router-dom';
import FilterableMovieTable from './Routes/FilterableMovieTable/FilterableMovieTable';
import MovieDetail from './Routes/MovieDetail/MovieDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <FilterableMovieTable /> } />
      <Route path="/movies/:movieId" element={ <MovieDetail /> } />
    </Routes>
  );
}
export default App;
