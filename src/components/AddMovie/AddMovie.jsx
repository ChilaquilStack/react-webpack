import React, {useState} from 'react';
import './index.css';

const AddMovie = ({title, addMovie}) => {

	const [movie, setMovie] = useState({
		url: '',
		title: '',
		genre: [],
		runtime: '',
		overview: '',
		release_date: '',
	});

	const handleChange = (event) => {
		const genre = (event.target.name === 'genre') ? Array.from(event.target.selectedOptions, item => item.value) : [];
		setMovie({
			...movie,
			[event.target.name] : event.target.value,
			genre
		});
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		addMovie(movie);
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
				onChange={handleChange}
			/>

			<label htmlFor="release_data">Release Date</label>
			<input 
				type="date" 
				id="release-date" 
				name="release_date" 
				onChange={handleChange}
			/>

			<label htmlFor="url">MOVIE URL</label>
			<input 
				type="text" 
				id="url" 
				name="url" 
				placeholder="https://" 
				onChange={handleChange}
			/>

			<label htmlFor="genre">GENRE</label>
			<select name="genre" id="genre" multiple onChange={handleChange} value={movie.genre}>
				<option value="Crime">Crime</option>
				<option value="Documentary">Documentary</option>
				<option value="Horror">Horror</option>
				<option value="Comedy">Comedydsads</option>
			</select>

			<label htmlFor="runtime">RUNTIME</label>
			<input 
				type="text" 
				placeholder="minutes" 
				name="runtime" 
				id="runtime" 
				onChange={handleChange}
			/>

			<label htmlFor="overview">Overview</label>
			<textarea 
				name="overview" 
				id="overview" 
				cols="30" 
				rows="10" 
				placeholder="Movie description" 
				onChange={handleChange}
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