import './index.css';
import React from 'react';

const FiltersBar = () => {
    
    return (
        <nav className="filterBar">
            <ul className="filterBar-genres">
                <li>
                    ALL
                </li>
                <li>
                    DOCUMENTARY
                </li>
                <li>
                    COMEDY
                </li>
                <li>
                    HORROR
                </li>
                <li>
                    CRIME
                </li>
            </ul>
            <label htmlFor="releaseDate" className="filterBar-date">
                <p>SORT BY</p>
                <input id="releaseDate" type="date" value="RELEASE DATE"/>
            </label>
        </nav>
    )
    
}

export default FiltersBar;