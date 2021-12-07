import store from './store/index.js'
import { Provider } from 'react-redux'
import React, { useState } from 'react'
import Home from './pages/Home/Home.jsx'
import Modal from './components/Modal/Modal.jsx'
import Header from './components/Header/Header.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import FiltersBar from './components/FilterBar/FilterBar.jsx'
import MoviesList from './components/MoviesList/MoviesList.jsx'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

const App = () =>  {

    const [showDetailsMovie, setShowDetailsMovie] = useState(false);

    const showMovie = () => setShowDetailsMovie(true);

    return (
        <ErrorBoundary>
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Navigate to="/search"/>
                            }
                        />
                        <Route 
                            path="/search"
                            element={
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
                            }
                        />
                        <Route
                            path="*"
                            element={
                                <h1>404 Page Not Found</h1>
                            }
                        />
                    </Routes>
                </Router>
            </Provider>
        </ErrorBoundary>

    );

}

export default App;