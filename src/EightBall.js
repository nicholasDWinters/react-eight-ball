import React, { useState } from 'react';
import './EightBall.css';

const EightBall = (props) => {
    const [color, setColor] = useState('black');
    const [msg, setMsg] = useState('Think of a Question');
    const askQuestion = () => {
        let rand = Math.floor(Math.random() * props.answers.length);
        setColor(props.answers[rand].color);
        setMsg(props.answers[rand].msg);
    }
    let colorId = `EightBall-${color}`;
    return (
        <div className='EightBall' id={colorId} onClick={askQuestion}>
            <p className='EightBall-text'>{msg}</p>
        </div>
    );
};

export default EightBall;