import React, { useRef, useState, useEffect } from 'react';

import Fruit from '../../components/Fruit/Fruit';

import * as icons from '../../assets/icons';

import './GameZone.scss';

const GameZone = React.memo(props => {
    const gameZone = useRef(null);
    const gameZoneDimension = {}
    const [fruits, setFruits] = useState([]);

    const randomPosition = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const fruitClicked = event => {
        removeFruit(event.target.offsetLeft, event.target.offsetTop);
        addFruits(2);
        props.setScore(prevScore => prevScore + 1);
    }

    const removeFruit = (x, y) => {
        changeFruitClass(x, y, 'desapear');
        setTimeout(() => {
            setFruits(prevFruits => prevFruits.filter(fruit => !(fruit.x === x && fruit.y === y)));
        }, 500);
    }

    const changeFruitClass = (x, y, className) => {
        setFruits(prevFruits => {
            const fruitIndex = prevFruits.findIndex(fruit => fruit.x === x && fruit.y === y);

            if(fruitIndex !== -1) {
                prevFruits[fruitIndex]['class'] = className;
            }

            return prevFruits;
        });
    }

    const addFruits = qtd => {
        const fruitToAdd = [];
        for(let i = 1; i<= qtd; i++) {
            const xFruit = randomPosition(gameZoneDimension['xStart'], gameZoneDimension['xEnd']);
            const yFruit = randomPosition(gameZoneDimension['yStart'], gameZoneDimension['yEnd']);

            fruitToAdd.push({
                icon: icons[props.fruit],
                text: props.fruit,
                x: xFruit,
                y: yFruit,
                clicked: fruitClicked,
                class: 'new'
            });

            setTimeout(() => {
                changeFruitClass(xFruit, yFruit, '');
            }, 100);
        }

        setFruits(prevFruits => {
            return [
                ...prevFruits,
                ...fruitToAdd
            ];
        });
    }

    useEffect(() => {
        gameZoneDimension['yStart'] = gameZone.current.offsetTop;
        gameZoneDimension['yEnd'] = gameZone.current.offsetHeight - 50;
        gameZoneDimension['xStart'] = 0;
        gameZoneDimension['xEnd'] = gameZone.current.offsetWidth - 50;
        addFruits(1);
    }, []);

    return (<div ref={gameZone} className="GameZone">
        {fruits.map((fruit, key) => (
            <Fruit
                key={key}
                icon={fruit.icon} 
                text={fruit.text} 
                x={fruit.x} 
                y={fruit.y} 
                clicked={fruit.clicked}
                class={fruit.class} />
        ))}
    </div>);
});

export default GameZone;