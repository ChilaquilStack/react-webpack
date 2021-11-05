import React from 'react'
import { useFormik } from 'formik'
import { deleteMovie } from '../../reducers/Movies'
import { useSelector, useDispatch } from 'react-redux'
import { MODAL } from '../../reducers/Modal.js'

const DeleteMovie = () => {

    const dispatch = useDispatch() 
    
    const {movie} = useSelector(state => state.movies)
    
    const formik = useFormik({
        onSubmit: values => {
            dispatch(deleteMovie(movie))
            dispatch(MODAL.CLOSE())
        }
    })

    return (

        <form onSubmit={formik.handleSubmit}>

            <p>Are you sure want to delete this movie?</p>

            <input type="submit" value="CONFIRM" />

        </form>
    )

}

export default DeleteMovie;