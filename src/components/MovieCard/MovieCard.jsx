import './index.css';
import React from 'react';

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

export default MovieCard;