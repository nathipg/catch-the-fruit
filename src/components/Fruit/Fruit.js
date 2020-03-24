import React from 'react';

import './Fruit.scss';

const Fruit = React.memo(props => {
    const classes = ['Fruit'];

    if(props.class) {
        classes.push(props.class);
    }

    return (
        <img 
            className={classes.join(' ')} 
            src={props.icon} 
            alt={props.text}
            style={{
                left: props.x +'px',
                top: props.y +'px'
            }}
            onClick={event => props.clicked(event)} />
    );
});

export default Fruit;