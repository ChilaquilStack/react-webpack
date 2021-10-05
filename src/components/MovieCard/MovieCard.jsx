import './index.css';
import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({movie}) => {

    return (
        <div className="card">
            <img src={movie.src} alt={movie.title} className="card-image"/>
            <div className="card-footer">
                <p>{movie.title}</p>
                <p>{movie.date}</p>
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