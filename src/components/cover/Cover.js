import React from 'react';
import cover from '../../images/react.png';
import './Cover.css';

const Cover = () => {
    return (
        <div className="header_container mb-4">
                <img src={cover} alt=""/>
        </div>
    );
};

export default Cover;