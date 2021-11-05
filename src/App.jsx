import store from './store/index.js'
import { Provider } from 'react-redux'
import React, { useState } from 'react'
import Home from './pages/Home/Home.jsx'
import Modal from './components/Modal/Modal.jsx'
import Header from './components/Header/Header.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import FiltersBar from './components/FilterBar/FilterBar.jsx'
import MoviesList from './components/MoviesList/MoviesList.jsx'

const App = () =>  {

    const [showDetailsMovie, setShowDetailsMovie] = useState(false);

    const showMovie = () => setShowDetailsMovie(true);

    return (
        <ErrorBoundary>
            <Provider store={store}>
                <Home>
                    <Modal/>
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