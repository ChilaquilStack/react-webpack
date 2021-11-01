import React from 'react';
import { useSelector } from 'react-redux';

const DetailsMovie = ({setShowDetailsMovie}) => {

    const {
        title,
        rating,
        runtime,
        overview, 
        poster_path,
        release_data,
    } = useSelector(state => state.movies.movie);
    
    return(
        <div className="movie">
            <button className="header_button">
                <span onClick={() => setShowDetailsMovie(false)}>Search Button</span>
            </button>
            <div className="movie__image">
                <img src={poster_path} alt={title} />
            </div>
            <div className="movie__title">
                {title} - {rating}
            </div>
            <div className="movie__subtitle">
                {release_data} - {runtime}
            </div>
            <div className="movie__overview">
                {overview}
            </div>
        </div>
    )
}

export default DetailsMovie;