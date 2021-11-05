import './index.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { showMovies } from '../../reducers/Movies';
import { MODAL } from '../../reducers/Modal'

const MovieCard = ({
    movie,
    showMovie,
}) => {

    const dispatch = useDispatch();

    const handleShowMovie = (movie) => {
        dispatch(showMovies(movie))
        showMovie();
    }
    
    const handleClick = (movie, title) => {
        dispatch(showMovies(movie))
        dispatch(MODAL.OPEN({title}))
    }

    return (
        <div className="card">
            <div className="card-menu">
                <div className="card-menu-item">
                    <span onClick={() => handleClick(movie, 'EDIT MOVIE')}>Edit</span>
                </div>
                <div className="card-menu-item">
                    <span onClick={() => handleClick(movie, 'DELETE MOVIE')}>DELETE</span>
                </div>
            </div>
            <img 
                alt={movie.title}
                className="card-image"
                src={movie.poster_path}
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