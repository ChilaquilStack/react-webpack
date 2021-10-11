import React from 'react';
import Home from './pages/Home/Home.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import Header from './components/Header/Header.jsx';
import FiltersBar from './components/FilterBar/FilterBar.jsx';
import MoviesList from './components/MoviesList/MoviesList.jsx';
import Modal from './components/Modal/Modal.jsx';
import AddMovie from './components/AddMovie/AddMovie.jsx';
import Login from './components/Login/Login.jsx';
import { useState } from 'react';

const App = () =>  {

    const [title, setTitle] = useState('');
    const [movies, setMovies] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const openMovieModal = () => {
        setTitle('ADD MOVIE');
        setIsOpen(true);
    }
    
    const addMovie = (movie) => {
        setMovies([...movies, movie]);
    }
    
    const updateMovieModal = (movie) => {
        setTitle('EDIT MOVIE')
        setIsOpen(true);
    }

    return (
        <ErrorBoundary>
            <Home>
                <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                    <AddMovie title={title} addMovie={addMovie}/>
                </Modal>
                <Header setIsOpen={openMovieModal}/>
                <FiltersBar/>
                <MoviesList updateMovieModal={updateMovieModal} movies={movies}/>
            </Home>
        </ErrorBoundary>

    );

}

export default App;