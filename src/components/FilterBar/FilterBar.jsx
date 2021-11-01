import './index.css';
import React from 'react';
import {
    getMovies
} from '../../reducers/Movies'
import { useDispatch } from 'react-redux';

const FiltersBar = () => {

    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(getMovies({[e.target.name]: e.target.value}));
    }
    
    const handleClick = (name) => {
        dispatch(getMovies({filter: name}));
    }
 
    const genres = [
       '', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME' 
    ]
    
    return (
        <nav className="filterBar">
            <div className="filterBar-genres">
                {genres.map((genre,key) =>
                    <button key={key} onClick={() => handleClick(genre)}>
                        { genre ? genre : 'ALL' }
                    </button>
                )}
            </div>
            <label htmlFor="releaseDate" className="filterBar-date">
                <p>SORT BY</p>
                <select 
                    name="sortBy" 
                    id="sortBy"
                    onChange={handleChange}
                >
                    <option value="release_date">RELEASE DATE</option>   
                    <option value="rating">RATING</option>   
                </select>
            </label>
        </nav>
    )
    
}

export default FiltersBar;