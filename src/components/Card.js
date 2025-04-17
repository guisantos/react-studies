import React from "react";
import './Card.css';

const Card =({ title, image, children, footer}) => {
    return (
        <div className="card">
            {image && <img src={image} alt={title} className="card-image" />}
            <div className="card-body">
                {title && <h3 className="card-title">{title}</h3>}
                <div className="card-content">{children}</div>
            </div>
            {footer && <div className="card-footer">{footer}</div>}
        </div>
    );
};

export default Card;