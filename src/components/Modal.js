import React from "react";
import './Modal.css';

const Modal = ({ isOpen, onClose, children, title }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {title && <h2 className="modal-title">{title}</h2>}
                <div className="modal-body">{children}</div>
                <button className="modal-close" onClick={onClose}>
                    Close 
                </button>
            </div>
        </div>
    );
};

export default Modal;