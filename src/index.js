import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './css/index.css';
import MovieDetail from './Routes/MovieDetail/MovieDetail';
import FilterableMovieTable from './Routes/FilterableMovieTable/FilterableMovieTable';

const router = createBrowserRouter([
  {
    path: '/',
    element: <FilterableMovieTable />,
  },
  {
    path: '/movies/:movieId',
    element: <MovieDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
);
