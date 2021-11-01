import './index.css';
import React, { useState } from 'react';
import { postMovie, updateMovie, MOVIES } from '../../reducers/Movies.js'
import { useDispatch, useSelector } from 'react-redux'

const AddMovie = () => {

	const dispatch = useDispatch();
	
	const {title} = useSelector(state => state.modal)
	
	const {movie} = useSelector(state => state.movies);

	const handleChange = (event) => {
		
		const genres = (event.target.name === 'genres') 
			? Array.from(event.target.selectedOptions, item => item.value) 
			: movie.genres;
		
		const runtime = (event.target.name === 'runtime') 
			? Number(event.target.value)
			: movie.runtime
		
		const poster_path = movie.poster_path || 'https://placeimg.com/640/480/people'

		dispatch(MOVIES.SHOW({movie: {
			...movie,
			[event.target.name] : event.target.value,
			genres,
			runtime,
			poster_path
		}}));
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		if(title === 'ADD MOVIE')
			dispatch(postMovie(movie));
		if(title === 'EDIT MOVIE')
			dispatch(updateMovie(movie));
	}

	return (
	
		<div className="add_movie">

			<h1>{title}</h1>
			
			<form className="add_movie_form" onSubmit={handleSubmit}>

				<label htmlFor="title">Title</label>
				<input 
					type="text" 
					id="title" 
					name="title" 
					value={movie.title}
					onChange={handleChange}
				/>

				<label htmlFor="release_data">Release Date</label>
				<input 
					type="date" 
					id="release-date" 
					name="release_date" 
					onChange={handleChange}
					value={movie.release_date}
				/>

				<label htmlFor="url">MOVIE URL</label>
				<input 
					id="url"
					name="url"
					type="text"
					value={movie.poster_path}
					placeholder="https://"
					onChange={handleChange}
				/>

				<label htmlFor="genres">GENRES</label>
				<select
					name="genres"
					id="genres"
					multiple
					onChange={handleChange}
					value={movie.genres}
				>
					<option value="Crime">Crime</option>
					<option value="Documentary">Documentary</option>
					<option value="Horror">Horror</option>
					<option value="Comedy">Comedydsads</option>
				</select>

				<label htmlFor="runtime">RUNTIME</label>
				<input
					type="number"
					id="runtime"
					name="runtime"
					value={movie.runtime}
					placeholder="minutes" 
					onChange={handleChange}
				/>

				<label htmlFor="overview">Overview</label>
				<textarea 
					cols="30"
					rows="10"
					id="overview"
					name="overview"
					value={movie.overview}
					onChange={handleChange}
					placeholder="Movie description"
				>
				</textarea>

				<div>
					<button>RESET</button>
					<button>SUBMIT</button>
				</div>

			</form>

		</div>

	);

}

export default AddMovie;