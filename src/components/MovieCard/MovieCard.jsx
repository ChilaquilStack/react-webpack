import './index.css';
import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({movie, updateMovieModal}) => {

    return (
        <div className="card">
            <div className="card-menu">
                <div className="card-menu-item">
                    <span onClick={() => updateMovieModal()}>Edit</span>
                </div>
                <div className="card-menu-item">Delete</div>
            </div>
            <img src={movie.src} alt={movie.title} className="card-image"/>
            <div className="card-footer">
                <span>...</span>
                <p>{movie.title}</p>
                <p>{movie.release_date}</p>
                <p>{movie.genre.join(', ')}</p>
            </div>
        </div>
    )

}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        genre: PropTypes.array.isRequired
    }).isRequired
}

export default MovieCard;