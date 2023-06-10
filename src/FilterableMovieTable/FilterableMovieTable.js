import { useState } from 'react';
import MovieTable from './MovieTable/MovieTable';
import SortByContainer from './SortBy/SortByContainer';

function FilterableMovieTable({ movies }) {
  const [sortType, setSortType] = useState('rating');
  return (
    <div>
      <SortByContainer
        sortType={ sortType }
        setSortType={ setSortType }
      />
      <MovieTable
        movies={ movies }
        sortType={ sortType }
      />
    </div>
  );
}
export default FilterableMovieTable;
