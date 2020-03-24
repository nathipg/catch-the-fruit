import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import Screen from '../../components/Screen/Screen';
import GameZone from '../GameZone/GameZone';

import { diffSeconds, secondsToHours } from '../../util/utility';

import './Game.scss';

const Game = () => {
    const [startTime] = useState(new Date());
    const [time, setTime] = useState('00:00');
    const [score, setScore] = useState(0);
    const [fruit] = useState(queryString.parse(useLocation().search).fruit);

    useEffect(() => {
        setInterval(() => {
            setTime(
                secondsToHours(
                    diffSeconds(startTime, new Date())
                )
            );
        }, 1000);
    }, []);

    return (
        <Screen>
            <div className="statusBar">
                <span>Time: {time}</span>
                <span>Score: {score}</span>
            </div>
            <GameZone fruit={fruit} setScore={setScore} />
        </Screen>
    );
};

export default Game;