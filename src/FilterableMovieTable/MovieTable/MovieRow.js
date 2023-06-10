import './css/index.css';

function MovieRow({ movie, index }) {
  const { picture, name, rating } = movie;
  return (
    <tr
      className={ `movie-row ${index % 2 === 0 ? 'even' : 'odd'}` }
    >
      <td>
        <img src={ picture } alt={ name } />
      </td>
      <td>{name}</td>
      <td>{rating}</td>
    </tr>
  );
}
export default MovieRow;
