import React, { useCallback } from 'react';
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
import store from './store/index.js';
import { Provider } from 'react-redux'

const App = () =>  {

    const [title, setTitle] = useState('');
    const [movie, setMovie] = useState(Movie);

    const [showDetailsMovie, setShowDetailsMovie] = useState(false);

    const changeTitleModal = useCallback((title) => setTitle(title), [title])
    
    const showMovie = () => {
        setShowDetailsMovie(true);
    }

    return (
        <ErrorBoundary>
            <Provider store={store}>
                <Home>
                    <Modal>
                        <AddMovie 
                            initialState={movie}
                        />
                    </Modal>
                    { showDetailsMovie
                        ? <DetailsMovie setShowDetailsMovie={setShowDetailsMovie}/> 
                        : <Header/> 
                    }
                    <FiltersBar/>
                    <MoviesList
                        showMovie={showMovie}
                    />
                </Home>
            </Provider>
        </ErrorBoundary>

    );

}

export default App;