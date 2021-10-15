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
    const [movie, setMovie] = useState({
		url: '',
		title: '',
		genre: [],
		runtime: '',
		overview: '',
		release_date: '',
	});
    const [movies, setMovies] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const openMovieModal = () => {
        setIsOpen({
            url: '',
            title: '',
            genre: [],
            runtime: '',
            overview: '',
            release_date: '',
        })
        setTitle('ADD MOVIE');
        setIsOpen(true);
    }
    
    const addMovie = (movie) => {
        setMovies([...movies, { ...movie, id: Math.floor(Math.random() * 100) }]);
        setIsOpen(false);
    }
    
    const deleteMovie = ({id}) => {
        setMovies(movies.filter(movie => movie.id !== id));
    }
    
    const updateMovie = (movie) => {
        console.log({movie})
        setTitle('EDIT MOVIE');
        setMovie(movie);
        setIsOpen(true);
    }

    React.useEffect(() => {
        console.log('App');
    })

    return (
        <ErrorBoundary>
            <Home>
                <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                    <AddMovie title={title} addMovie={addMovie} initialState={movie}/>
                </Modal>
                <Header setIsOpen={openMovieModal}/>
                <FiltersBar/>
                <MoviesList 
                    movies={movies}
                    deleteMovie={deleteMovie}
                    updateMovie={updateMovie} 
                />
            </Home>
        </ErrorBoundary>

    );

}

export default App;