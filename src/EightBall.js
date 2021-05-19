import React, { useState } from 'react';
import './EightBall.css';

const EightBall = (props) => {
    const [color, setColor] = useState('black');
    const [msg, setMsg] = useState('Think of a Question');
    const [countGreen, setCountGreen] = useState(0);
    const [countRed, setCountRed] = useState(0);
    const [countGold, setCountGold] = useState(0);
    const addToCount = (color) => {
        if (color === 'red') setCountRed(countRed + 1);
        if (color === 'green') setCountGreen(countGreen + 1);
        if (color === 'goldenrod') setCountGold(countGold + 1);
    }
    const askQuestion = () => {
        let rand = Math.floor(Math.random() * props.answers.length);
        setColor(props.answers[rand].color);
        setMsg(props.answers[rand].msg);
        addToCount(props.answers[rand].color);
    }
    const reset = () => {
        setColor('black');
        setMsg('Think of a Question');
        setCountRed(0);
        setCountGreen(0);
        setCountGold(0);
    }
    let colorId = `EightBall-${color}`;
    return (
        <>
            <div className='EightBall' id={colorId} onClick={() => askQuestion()}>
                <p className='EightBall-text'>{msg}</p>
            </div>
            <button className='EightBall-reset' onClick={() => reset()}>Reset</button>
            <div className='EightBall-colorCounts'>
                <p>Green Count: {countGreen}</p>
                <p>Red Count: {countRed}</p>
                <p>Goldenrod Count: {countGold}</p>
            </div>
        </>
    );
};

export default EightBall;