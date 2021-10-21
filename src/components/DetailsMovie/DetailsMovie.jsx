import React from 'react';

const DetailsMovie = ({movie, setShowDetailsMovie}) => {
    const {title, src, rating, overview, genre, release_data, runtime} = movie;
    return(
        <div className="movie">
            <button className="header_button">
                <span onClick={() => setShowDetailsMovie(false)}>Search Button</span>
            </button>
            <div className="movie__image">
                <img src={src} alt={title} />
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