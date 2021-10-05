import './index.css'
import React from 'react';

const Modal = ({children}) => (
    <div className="modal is-open">
        <div className="modal-container">
            <button className="modal-close">X</button>
            {children}
        </div>
    </div>
);

export default Modal;