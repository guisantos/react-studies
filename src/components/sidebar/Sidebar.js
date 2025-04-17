import React, { useState } from "react";
import './Sidebar.css';

const Sidebar = ({items = [], onSelect}) => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
        if (onSelect) {
            onSelect(items[index])
        }
    };

    return (
        <div className={`sidebar ${collapsed ? 'collapsed': ''}`}>
            <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
                {collapsed ? '➡' : '⬅'}
            </button>

            <ul className="sidebar-list">
                {items.map((item, i) => (
                    <li
                        key={i}
                        className={`sidebar-item ${i === activeIndex ? 'active' : ''}`}
                        onClick={() => handleClick(i)}
                        title={collapsed ? item.label : ''}
                    >
                        <span className="icon">{item.icon}</span>
                        {!collapsed && <span className="label">{item.label}</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;