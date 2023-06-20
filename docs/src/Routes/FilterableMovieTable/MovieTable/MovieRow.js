import './css/index.css';
import { Link } from 'react-router-dom';

function MovieRow({ movie, index }) {
  const { id, picture, name, rating } = movie;
  return (
    <tr
      className={ `movie-row ${index % 2 === 0 ? 'even' : 'odd'}` }
    >
      <td>
        <img src={ picture } alt={ name } />
      </td>
      <td>
        <Link to={ `/movies/${id}` } className="movie-name-link">
          {name}
        </Link>
      </td>
      <td>{rating}</td>
    </tr>
  );
}
export default MovieRow;
