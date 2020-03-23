import React from 'react';

import './BoxIcon.scss';

const BoxIcon = props => {
    return (
        <div className="BoxIcon">
            <div className="content">
                <span className="title">{props.text}</span>
                <img src={props.icon} alt={props.text} />
            </div>
        </div>
    );
};

export default BoxIcon;