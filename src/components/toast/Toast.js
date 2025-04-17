import React from "react";
import './Toast.css';

const Toast = ({message, type ='info', onClose}) => {
    return (
        <div className={`toast toast-${type}`}>
            <span>{message}</span>
            <button onClick={onClose} className="toast-close">&times;</button>
        </div>
    )
}

export default Toast;