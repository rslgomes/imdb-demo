import { useState } from 'react';
import MovieTable from './MovieTable/MovieTable';
import SortByOptions from './SortBy/SortByOptions';
import './css/index.css';

function FilterableMovieTable() {
  const [sortType, setSortType] = useState('rating');
  return (
    <div className="movie-table">
      <SortByOptions
        setSortType={ setSortType }
      />
      <MovieTable
        sortType={ sortType }
      />
    </div>
  );
}
export default FilterableMovieTable;
