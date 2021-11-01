import './index.css'
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { MODAL } from '../../reducers/Modal';

const Modal = ({children}) => {

    const dispatch = useDispatch()

    const {isOpen} = useSelector(state => state.modal)

    return (
        <div className={`modal ${isOpen && 'is-open'}`}>
        <div className="modal-container">
            <button className="modal-close" onClick={() => dispatch(MODAL.CLOSE())}>X</button>
            {children}
        </div>
    </div>
    );
}
    
Modal.propTypes = {
    children: PropTypes.node.isRequired
}

export default Modal;