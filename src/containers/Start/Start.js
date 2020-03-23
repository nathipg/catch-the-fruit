import React from 'react';

import Screen from '../../components/Screen/Screen';
import ButtonLink from '../../components/ButtonLink/ButtonLink';

const Start = () => {
    return (
        <Screen centerContent>
            <h1>Catch the fruit</h1>
            <ButtonLink to="/select-fruit">Play Game</ButtonLink>
        </Screen>
    );
};

export default Start;