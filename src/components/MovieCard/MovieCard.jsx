import './index.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
    deleteMovie,
    showMovies,
} from '../../reducers/Movies';
import {
    MODAL
} from '../../reducers/Modal'

const MovieCard = ({
    movie,
    showMovie,
}) => {

    const dispatch = useDispatch();

    const handleShowMovie = (movie) => {
        dispatch(showMovies(movie))
        showMovie();
    }

    const handleEditMovie = (movie) => {
        dispatch(showMovies(movie))
        dispatch(MODAL.OPEN({title: 'EDIT MOVIE'}))
    }

    return (
        <div className="card">
            <div className="card-menu">
                <div className="card-menu-item">
                    <span onClick={() => handleEditMovie(movie)}>Edit</span>
                </div>
                <div className="card-menu-item">
                    <span onClick={() => dispatch(deleteMovie(movie))}>DELETE</span>
                </div>
            </div>
            <img 
                src={movie.poster_path} 
                alt={movie.title} 
                className="card-image" 
                onClick={() => handleShowMovie(movie)} 
            />
            <div className="card-footer">
                <span>...</span>
                <p>{movie.title}</p>
                <p>{movie.release_date}</p>
                <p>{movie.genres.join(', ')}</p>
            </div>
        </div>
    )

}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        //url: PropTypes.string.isRequired
    }).isRequired
}

export default MovieCard;