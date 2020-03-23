import React from 'react';

import './Screen.scss';

const Screen = props => {
    const classes = ['Screen'];

    if(props.centerContent) {
        classes.push('center');
    }

    return (
        <div className={classes.join(' ')}>
            {props.children}
        </div>
    );
};

export default Screen;