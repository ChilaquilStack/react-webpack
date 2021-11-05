import { Movie as TMovie} from '../types/index.js';

import { createAction, createReducer } from '@reduxjs/toolkit'

import { MODAL } from './Modal.js'

export const MOVIES = {
    GET: createAction('movies/get'),
    ADD: createAction('movies/create'),
    ERROR: createAction('movies/error'),
    REMOVE: createAction('movies/remove'),
    UPDATE: createAction('movies/update'),
    SHOW: createAction('movies/show'),
}

export const getMovies = ( query = {sortBy: '', filter: ''} ) => async (dispatch) => {
    
    const {sortBy, filter} = query;

    let baseUrl = 'http://localhost:4000/movies?sortOrder=asc';

    if(sortBy)
        baseUrl = `${baseUrl}&sortBy=${query.sortBy}`
        
    if(filter)
        baseUrl = `${baseUrl}&filter=${query.filter}`

    try {
        const response = await fetch(baseUrl);
        const { data: movies } = await response.json();
        dispatch(MOVIES.GET({movies}));
    } catch(e) {
        dispatch(MOVIES.ERROR({error: e.message}))
    }
}

export const postMovie = movie => async dispatch => {
    const url = 'http://localhost:4000/movies';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(movie)
        });
        const data = await response.json();
        dispatch(MOVIES.ADD({movie: data}));
        dispatch(MODAL.CLOSE());
    } catch(e) {
        dispatch(MOVIES.ERROR({error: e.message}))
    }
}

export const deleteMovie = movie => async dispatch => {
    try {
        await fetch(`http://localhost:4000/movies/${movie.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
        dispatch(MOVIES.REMOVE({id: movie.id}))
        dispatch(MODAL.CLOSE());
    } catch (error) {
        dispatch(MOVIES.ERROR({error}))
    }
}

export const updateMovie = (movie) => async dispatch => {
    try {
        const response = fetch(`http://localhost:4000/movies/${movie.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(movie)
        })
        const data = await response.json()
        dispatch(MOVIES.UPDATE({movie: data}))
        dispatch(MODAL.CLOSE());
    } catch(error) {
        dispatch(MOVIES.ERROR({error: error.message}))
    }
}

export const showMovies = movie => async dispatch => {

    if(!movie) dispatch(MOVIES.SHOW({movie: TMovie}))

    try {
        const response = await fetch(`http://localhost:4000/movies/${movie.id}`)
        const data = await response.json();
        dispatch(MOVIES.SHOW({movie: data}))
    } catch (error) {
        dispatch(MOVIES.ERROR({error: error.message}))
    }
}

const initialState = { 
    movies: [], 
    error: '', 
    movie: TMovie,
};

const moviesReducer = createReducer(initialState, (builder) => {

    builder
        .addCase(MOVIES.GET.toString(), (state, action) => ({
            ...state,
            movies: [...action.payload.movies]
        }))
        .addCase(MOVIES.ADD.toString(), (state, action) => ({
            ...state,
            movies: [...state.movies, action.payload.movie]
        }))
        .addCase(MOVIES.REMOVE.toString(), (state, action) => ({
            ...state,
            movies: [...state.movies.filter(movies => movies.id !== action.payload.id)]
        }))
        .addCase(MOVIES.UPDATE.toString(), (state, action) => ({
            ...state,
            movies: [...state.movies.map(movie =>
                movie.id === action.payload.movie.id ? action.payload.movie : action.payload.movie
            )]
        }))
        .addCase(MOVIES.ERROR.toString(), (state, action) => ({
            ...state,
            error: action.payload.error
        }))
        .addCase(MOVIES.SHOW.toString(), (state, action) => ({
            ...state,
            movie: action.payload.movie
        }))
})

export default moviesReducer