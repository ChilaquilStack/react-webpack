import './index.css';
import React from 'react';
import MovieCard from '../MovieCard/MovieCard.jsx';

const MoviesList = ({
    movies,
    showMovie,
    deleteMovie,
    updateMovie, 
}) => (
    <div className="Movie-List">
        {movies.map(movie => 
            <MovieCard 
                movie={movie}
                key={movie.id}
                showMovie={showMovie}
                updateMovie={updateMovie}
                deleteMovie={deleteMovie}
            />
        )}    
    </div>
);

export default MoviesList;