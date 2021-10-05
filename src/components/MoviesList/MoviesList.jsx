import React from 'react';
import MovieCard from '../MovieCard/MovieCard.jsx';
import './index.css';

const movies = [
    {
        id: 1,
        date: '2004',
        title: 'pulp fiction',
        genre: ['action', 'adventure'],
        src: 'https://placeimg.com/300/300/any',
    },
    {
        id: 2,
        date: '2003',
        title: 'Bohemian Rhapsody',
        genre: ['Drama', 'Biography', 'Music'],
        src: 'https://placeimg.com/200/200/any',
    },
    {
        id: 3,
        date: '1994',
        title: 'Kill Bill: Vol 2',
        genre: ['Oscar', 'Winning', 'Movie'],
        src: 'https://placeimg.com/400/400/any',
    },
    {
        id: 4,
        date: '2004',
        title: 'Avengers',
        genre: ['Action', 'Adventure'],
        src: 'https://placeimg.com/400/400/any',
    },
    {
        id: 5,
        date: '2003',
        title: 'Iception',
        genre: ['Action', 'Adventure'],
        src: 'https://placeimg.com/400/400/any',
    },
    {
        id: 6,
        date: '1994',
        title: 'Reservoirs dogs',
        genre: ['Oscar', 'Winning', 'Movie'],
        src: 'https://placeimg.com/100/100/any'
    }
]

const MoviesList = () => {

    return(
        <div className="Movie-List">
            {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}    
        </div>
    )

}


export default MoviesList;