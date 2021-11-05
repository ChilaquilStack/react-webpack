import './index.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import React from 'react';
import { useSelector, useDispatch} from 'react-redux'

const AddMovie = ({onSubmit}) => {

	const dispatch = useDispatch();
	
	const {movie: initialValues} = useSelector(state => state.movies);

	const formik = useFormik({
		enableReinitialize: true,
		initialValues,
		onSubmit: values => {
			dispatch(onSubmit(values))
		},
		validationSchema: Yup.object({
			title: Yup.string().max(15, 'Must be 15 characters on less').required('Required'),
			release_date: Yup.date().required('Required'),
			poster_path: Yup.string().required('Required'),
			genres: Yup.array().required('Required'),
			runtime: Yup.number().required('Required'),
			overview: Yup.string().required('Required'),
			release_date: Yup.date().required('Required'),
		})
	})

	return (

		<form className="add_movie_form" onSubmit={formik.handleSubmit}>
			<label htmlFor="title">Title</label>
			<input 
				type="text" 
				id="title" 
				name="title" 
				onBlur={formik.handleBlur}
				value={formik.values.title}
				onChange={formik.handleChange}
			/>
			{ formik.errors.title && <p>{formik.errors.title}</p> }

			<label htmlFor="release_data">Release Date</label>
			<input
				type="date" 
				id="release-date" 
				name="release_date" 
				onBlur={formik.handleBlur}
				onChange={formik.handleChange}
				value={formik.values.release_date}
			/>
			{ formik.errors.release_date && <p>{formik.errors.release_date}</p> }

			<label htmlFor="url">MOVIE URL</label>
			<input 
				type="text"
				id="poster_path"
				name="poster_path"
				placeholder="https://"
				onBlur={formik.handleBlur}
				onChange={formik.handleChange}
				value={formik.values.poster_path}
			/>
			{ formik.errors.poster_path && <p>{formik.errors.poster_path}</p> }


			<label htmlFor="genres">GENRES</label>
			<select
				multiple
				id="genres"
				name="genres"
				onBlur={formik.handleBlur}
				value={formik.values.genres}
				onChange={formik.handleChange}
			>
				<option value="Crime">Crime</option>
				<option value="Documentary">Documentary</option>
				<option value="Horror">Horror</option>
				<option value="Comedy">Comedydsads</option>
			</select>
			{ formik.errors.genres && <p>{formik.errors.genres}</p> }

			<label htmlFor="runtime">RUNTIME</label>
			<input
				type="number"
				id="runtime"
				name="runtime"
				placeholder="minutes" 
				onBlur={formik.handleBlur}
				value={formik.values.runtime}
				onChange={formik.handleChange}
			/>
			{ formik.errors.runtime && <p>{formik.errors.runtime}</p> }


			<label htmlFor="overview">Overview</label>
			<textarea 
				cols="30"
				rows="10"
				id="overview"
				name="overview"
				onBlur={formik.handleBlur}
				value={formik.values.overview}
				onChange={formik.handleChange}
				placeholder="Movie description"
			>
			</textarea>
			{ formik.errors.overview && <p>{formik.errors.overview}</p> }

			<div>
				<button>RESET</button>
				<button>SUBMIT</button>
			</div>
		
		</form>

	);

}

export default AddMovie;