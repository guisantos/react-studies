import React, { useState } from "react";
import './Rating.css'

const Rating = ({ value = 0, max = 5, onChange, readOnly = false}) => {
    const [hovered, setHovered] = useState(null);

    const handleClick = (index) => {
        if (!readOnly && onChange) {
            onChange(index + 1);
        }
    }

    const handleMouseEnter = (index) => {
        if (!readOnly) {
            setHovered(index);
        }
    }

    const handleMouseLeave = () => {
        if (!readOnly) {
            setHovered(null)
        }
    }

    return (
        <div className="rating">
            {Array.from({length: max}).map((_, i) => {
                const filled = hovered !== null ? i <= hovered : i < value;

                return (
                  <span
                    key={i}
                    className={`star ${filled ? 'filled' : ''} ${readOnly ? 'readOnly' : ''}`}
                    onClick={() => handleClick(i)}
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={handleMouseLeave}
                    >
                    ★
                  </span>  
                );
            })}
        </div>
    )
}

export default Rating;