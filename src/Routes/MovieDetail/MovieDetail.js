import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import moviesData from '../../data/MOVIES.json';

const goodMovie = 7;
const mediocreMovie = 5;

function descriptionByRating(rating) {
  if (rating > goodMovie) return ('O filme é bom');
  if (rating > mediocreMovie) return ('o filme é mais ou menos');
  return ('o filme é ruim');
}

function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const movieId = parseInt(useLocation().pathname.split('/').pop(), 10);

  useEffect(() => {
    setMovie(moviesData.movies[movieId - 1]);
  }, [movieId]);
  console.log(movie);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.name}</h2>
      <p>
        Rating:
        { movie.rating }
      </p>
      <p>Release Date: sei lá não tinha no meu json</p>
      <p>
        Description:
        { descriptionByRating(movie.rating) }
      </p>
    </div>
  );
}

export default MovieDetail;
