import './index.css';
import React from 'react';
import MovieCard from '../MovieCard/MovieCard.jsx';

const MoviesList = ({movies, updateMovie}) => (
    <div className="Movie-List">
        {movies.map(movie => <MovieCard movie={movie} key={movie.id} updateMovie={updateMovie}/>)}    
    </div>
);

export default MoviesList;