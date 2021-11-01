import './index.css';
import React from 'react';
import MovieCard from '../MovieCard/MovieCard.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../reducers/Movies'

const MoviesList = ({showMovie}) => {

    const dispatch = useDispatch();

    const movies = useSelector(state => state.movies.movies);
    const error = useSelector(state => state.movies.error);

    React.useEffect(() => dispatch(getMovies()), []);

    return(
        <div className="Movie-List">
            {error && <p>Something was wrong...</p>}
            {movies.length ? movies.map(movie => 
                <MovieCard 
                    movie={movie}
                    key={movie.id}
                    showMovie={showMovie}
                />
            ) : <p>There are not movies</p>}
        </div>
    );  
} 

export default MoviesList;