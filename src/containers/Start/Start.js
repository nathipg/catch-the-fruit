import React from 'react';
import { Link } from 'react-router-dom';

import Screen from '../../components/Screen/Screen';
import Button from '../../components/Button/Button';

const Start = () => {
    return (
        <Screen centerContent>
            <h1>Catch the fruit</h1>
            <Link to="/select-fruit">
                <Button>Play Game</Button>
            </Link>
        </Screen>
    );
};

export default Start;