import React, { useState } from "react";
import './Tabs.css';

const Tabs = ({ tabs = [] }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="tabs-wrapper">
            <div className="tabs-header">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`tab-button ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tabs-content">
                {tabs[activeIndex]?.content}
            </div>
        </div>
    );
};

export default Tabs;