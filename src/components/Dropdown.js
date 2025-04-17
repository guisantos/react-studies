import React from "react";
import './Dropdown.css';

const Dropdown = ({ label, options = [], value, onChange, name }) => {
    return (
        <div className="dropdown-wrapper">
            {label && <label htmlFor={name} className="dropdown-label">{label}</label>}
            <select
                id={name}
                name={name}
                value={value}
                className="dropdown-select"
                onChange={(e) => onChange(e.target.value)}>
                <option value="">Select an option</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;