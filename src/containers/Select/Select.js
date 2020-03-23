import React from 'react';
import { Link } from 'react-router-dom';

import Screen from '../../components/Screen/Screen';
import InlineList from '../../components/InlineList/InlineList';
import BoxIcon from '../../components/BoxIcon/BoxIcon';

import * as icons from '../../assets/icons';

const Select = () => {
    const fruits = [
        { display: 'Banana', option: 'banana' },
        { display: 'Orange', option: 'orange' },
        { display: 'Strawberry', option: 'strawberry' },
        { display: 'Apple', option: 'apple' },
        { display: 'Pineapple', option: 'pineapple' },
        { display: 'Watermelon', option: 'watermelon' },
        { display: 'Peach', option: 'peach' }
    ];
    return (
        <Screen centerContent>
            <h1>What is your favorite fruit?</h1>
            <InlineList>
                {
                    fruits.map((fruit, key) => (
                        <Link key={key} to={`/game?fruit=${fruit.option}`}>
                            <BoxIcon text={fruit.display} icon={icons[fruit.option]} />
                        </Link>
                    ))
                }
                
            </InlineList>
        </Screen>
    );
};

export default Select;