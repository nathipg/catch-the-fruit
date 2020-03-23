import React from 'react';

import Screen from '../../components/Screen/Screen';
import ButtonLink from '../../components/ButtonLink/ButtonLink';

import './Start.scss';

const Start = () => {
    return (
        <Screen>
            <div className="Start">
                <h1>Catch the fruit</h1>
                <ButtonLink to="/select-fruit">Play Game</ButtonLink>
            </div>
        </Screen>
    );
};

export default Start;