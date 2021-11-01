import './index.css'
import React from 'react';
import { useDispatch } from 'react-redux';
import { MODAL } from '../../reducers/Modal'
import { showMovies } from '../../reducers/Movies';
import SearchBar from '../SearchBar/SearchBar.jsx';

const Header = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(showMovies())
        dispatch(MODAL.OPEN({title:'ADD MOVIE'}))
    }

    return (
        <div className="header">
            <div className="header_title">
                <p>netflixroullete</p>
                <button className="header_button" onClick={handleClick}>
                    + ADD MOVIE
                </button>
            </div>    
            <SearchBar/>
        </div>
    );
}

export default Header;