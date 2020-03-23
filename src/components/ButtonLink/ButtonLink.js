import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button/Button';

const ButtonLink = props => {
    return (
        <Link to={props.to}>
            <Button>{props.children}</Button>
        </Link>
    );
};

export default ButtonLink;