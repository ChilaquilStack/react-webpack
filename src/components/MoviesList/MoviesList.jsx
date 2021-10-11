import React from 'react';
import MovieCard from '../MovieCard/MovieCard.jsx';
import './index.css';

const MoviesList = ({movies, updateMovieModal}) => {

    return(
        <div className="Movie-List">
            {movies.map((movie,index) => <MovieCard movie={movie} key={index} updateMovieModal={updateMovieModal}/>)}    
        </div>
    )

}


export default MoviesList;