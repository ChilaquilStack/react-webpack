import './index.css';
import React, {useState} from 'react';

const AddMovie = ({title, addMovie, initialState}) => {

	const [movie, setMovie] = useState(initialState);

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
		setMovie(initialState);
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
					value={movie.url}
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