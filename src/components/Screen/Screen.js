import React from 'react';

import './Screen.scss';

const Screen = props => {
    return (
        <div className="Screen">
            {props.children}
        </div>
    );
};

export default Screen;