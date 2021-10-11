import './index.css'
import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({children, isOpen, setIsOpen}) => {

    return (
        <div className={`modal ${isOpen && 'is-open'}`}>
        <div className="modal-container">
            <button className="modal-close" onClick={() => setIsOpen(false)}>X</button>
            {children}
        </div>
    </div>
    );
}
    
Modal.propTypes = {
    children: PropTypes.node.isRequired
}

export default Modal;