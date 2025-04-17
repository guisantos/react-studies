import React, { useState, useCallback } from "react";
import Toast from './Toast';

let id = 0;

export const useToast = () => {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((message, type = 'info', duration = 3000) => {
        const toastId = id++;
        const newToast = { id: toastId, message, type};
        setToasts((prev) => [...prev, newToast]);

        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== toastId));
        }, duration);
    }, []);

    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
    }, []);

    return { toasts, addToast, removeToast };
};

const ToastContainer = ({ toasts = [], removeToast }) => {
    return (
        <div className="toast-container">
            {toasts.map((toast) => (
                <Toast 
                    key={toast.id}
                    message={toast.message}
                    type={toast.type}
                    onClose={() => removeToast(toast.id)}
                />
            ))}
        </div>
    );
};

export default ToastContainer;
