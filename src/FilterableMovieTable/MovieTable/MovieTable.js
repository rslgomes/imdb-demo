import MovieRow from './MovieRow';

function MovieTable({ movies, sortType }) {
  function compareMovies(moviea, movieb) {
    if ((typeof (moviea[sortType])) === 'number') {
      return movieb[sortType] - moviea[sortType];
    }
    if (moviea[sortType] > movieb[sortType]) {
      return 1;
    } if (moviea[sortType] < movieb[sortType]) {
      return -1;
    }
    return 0;
  }
  const moviesSorted = movies.slice().sort(compareMovies);
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
            key={ index }
            movie={ movie }
            index={ index }
          />))}
      </tbody>
    </table>
  );
}
export default MovieTable;
