import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import './index.css'
const Header = ({openMovieModal}) => {

    return (
        <div className="header">
            <div className="header_title">
                <p>netflixroullete</p>
                <button className="header_button" onClick={() => openMovieModal()}>
                    + ADD MOVIE
                </button>
            </div>    
            <SearchBar/>
        </div>
    );
}

export default Header;