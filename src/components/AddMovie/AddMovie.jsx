import React from 'react';
import './index.css';

const AddMovie = () => (
	
	<div className="add_movie">
		
		<h1>Add movie</h1>
		
		<form className="add_movie_form">

		<label htmlFor="title">Title</label>
				<input type="text" id="title" name="title"/>

		<label htmlFor="release_data">Release Date</label>
		<input type="date" id="release-date" name="release-date"/>

		<label htmlFor="url">MOVIE URL</label>
		<input type="text" id="url" name="url" placeholder="https://"/>

		<label htmlFor="genre">GENRE</label>
		<select name="genre" id="genre" multiple>
			<option value="Crime">Crime</option>
			<option value="Documentary">Documentary</option>
			<option value="Horror">Horror</option>
			<option value="Comedy">Comedydsads</option>
		</select>

		<label htmlFor="runtime">RUNTIME</label>
		<input type="text" placeholder="minutes" name="runtime" id="runtime"/>

		<label htmlFor="overview">Overview</label>
		<textarea name="overview" id="overview" cols="30" rows="10" placeholder="Movie description"></textarea>

		<div>
				<button>RESET</button>
				<button>SUBMIT</button>
		</div>

		</form>

	</div>

);

export default AddMovie;