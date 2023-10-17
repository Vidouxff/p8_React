import React from 'react';
import ChevronIcon from './ChevronIcon';
import "../styles/layouts/_mainApropos.scss";

const getTitleClassName = title => {
    switch (title) {
        case 'Fiabilité':
            return 'fiabilite';
        case 'Sécurité':
            return 'securite';
        default:
            return title.toLowerCase();
    }
};


const Collapse = ({ title, content, handleToggle, index, isRotated }) => {
    const className = getTitleClassName(title); 
    return (
        <div className="MainApropos__box">
        <div className={`MainApropos__${className}`}>
            <div className='MainApropos__vtitle'>{title}</div>
            <ChevronIcon onClick={() => handleToggle(index)} isRotated={isRotated[index]} />
        </div>
        <div className={`MainApropos__menuDrlent ${isRotated[index] ? 'open' : ''}`}>{content}</div>
    </div>
    );
}

export default Collapse;
