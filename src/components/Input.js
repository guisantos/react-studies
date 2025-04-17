import React from "react";
import './Input.css';

const Input = ({
    label,
    placeholder = '',
    type = 'text',
    value = '',
    onChange,
    name,
    required = false
}) => {
    return (
        <div className="input-wrapper">
            {label && <label className="input-label" htmlFor="{name}">{label}</label>}
            <input
                className="input-field"
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                required={required}
                onChange={onChange}
            />
        </div>
    )
}

export default Input;