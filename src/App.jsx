import React from 'react';
import Home from './pages/Home/Home.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import Header from './components/Header/Header.jsx';
import FiltersBar from './components/FilterBar/FilterBar.jsx';
import MoviesList from './components/MoviesList/MoviesList.jsx';
import Modal from './components/Modal/Modal.jsx';
import AddMovie from './components/AddMovie/AddMovie.jsx';
import Login from './components/Login/Login.jsx';

const App = () =>  {
    
    return (
        <ErrorBoundary>
        <Home>
            <Modal>
                <Login/>
            </Modal>
            <Header/>
            <FiltersBar/>
            <MoviesList/>
        </Home>
        </ErrorBoundary>

    );

}

export default App;