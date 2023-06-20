import MovieRow from './MovieRow';
import moviesData from '../../../data/MOVIES.json';

function MovieTable({ sortType }) {
  const MOVIES = moviesData.movies;

  function orderByName() {
    return MOVIES.sort((moviea, movieb) => {
      const aIsLast = 1;
      const bIsLast = -1;
      if (moviea.name < movieb.name) return bIsLast;
      return aIsLast;
    });
  }

  function orderByRating() {
    return MOVIES.sort((moviea, movieb) => movieb.rating - moviea.rating);
  }

  const moviesSorted = sortType === 'name' ? orderByName() : orderByRating();

  return (
    <table>
      <thead>
        <tr>
          <th> </th>
          <th>Name</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {moviesSorted.map((movie, index) => (
          <MovieRow
            key={ movie.id }
            movie={ movie }
            index={ index }
          />))}
      </tbody>
    </table>
  );
}
export default MovieTable;
