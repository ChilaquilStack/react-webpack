import './index.css'
import React from 'react'
import { MODAL } from '../../reducers/Modal'
import AddMovie  from '../AddMovie/AddMovie.jsx'
import { useSelector, useDispatch } from 'react-redux'
import DeleteMovie from '../DeleteMovie/DeleteMovie.jsx'
import { postMovie, updateMovie } from '../../reducers/Movies.js'

const Modal = () => {

    const dispatch = useDispatch()

    const {isOpen, title} = useSelector(state => state.modal)

    return (
        <div className={`modal ${isOpen && 'is-open'}`}>
            <div className="modal-container">
                <button className="modal-close" onClick={() => dispatch(MODAL.CLOSE())}>X</button>
                <h1>{title}</h1>
                { ['DELETE MOVIE'].includes(title) && <DeleteMovie/> }
                { ['ADD MOVIE'].includes(title) && <AddMovie onSubmit={postMovie} /> }
                { ['EDIT MOVIE'].includes(title) && <AddMovie onSubmit={updateMovie} /> } 
            </div>
        </div>
    );
}

export default Modal;