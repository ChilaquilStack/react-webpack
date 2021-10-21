import React, {createContext, useCallback} from 'react';
import Home from './pages/Home/Home.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import Header from './components/Header/Header.jsx';
import FiltersBar from './components/FilterBar/FilterBar.jsx';
import MoviesList from './components/MoviesList/MoviesList.jsx';
import Modal from './components/Modal/Modal.jsx';
import AddMovie from './components/AddMovie/AddMovie.jsx';
import DetailsMovie from './components/DetailsMovie/DetailsMovie.jsx';
import Login from './components/Login/Login.jsx';
import useModal from './hooks/useModal.js';
import { useState } from 'react';
import {Movie} from './types/index.js';

const App = () =>  {

    const [title, setTitle] = useState('');
    const [movie, setMovie] = useState(Movie);
    const [movies, setMovies] = useState([]);
    const [isOpen, openModal, closeModal] = useModal(false);
    const [showDetailsMovie, setShowDetailsMovie] = useState(false);

    const changeTitleModal = useCallback((title) => setTitle(title), [title])

    const openMovieModal = () => {
        changeTitleModal('ADD MOVIE');
        setMovie(Movie)
        openModal();
    }
    
    const addMovie = (movie) => {
        setMovies([...movies, { ...movie, id: Math.floor(Math.random() * 100) }]);
        closeModal();
    }
    
    const deleteMovie = ({id}) => setMovies(movies.filter(movie => movie.id !== id));
    
    const updateMovie = (movie) => {
        changeTitleModal('EDIT MOVIE');
        setMovie(movie);
        openModal();
    }

    const showMovie = (movie) => {
        setMovie(movie);
        setShowDetailsMovie(true);
    }

    return (
        <ErrorBoundary>
            <Home>
                <Modal isOpen={isOpen} closeModal={closeModal}>
                    <AddMovie 
                        title={title} 
                        addMovie={addMovie} 
                        initialState={movie}
                    />
                </Modal>
                { showDetailsMovie
                    ? <DetailsMovie movie={movie} setShowDetailsMovie={setShowDetailsMovie}/> 
                    : <Header openMovieModal={openMovieModal}/> 
                }
                <FiltersBar/>
                <MoviesList
                    movies={movies}
                    deleteMovie={deleteMovie}
                    updateMovie={updateMovie}
                    showMovie={showMovie} 
                />
            </Home>
        </ErrorBoundary>

    );

}

export default App;