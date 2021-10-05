import React from 'react';

const SearchBar = () => (

    <div>
        <h1>FIND YOUR MOVIE</h1>
        <form>
            <input 
                type="text" 
                id="search_input" 
                name="search_input" 
                placeholder="What do you want to watch?"
            />
            <button
                id="search_btn"
                name="search_btn"
            >
                SEARCH
            </button>
        </form>
    </div>

);

export default SearchBar;