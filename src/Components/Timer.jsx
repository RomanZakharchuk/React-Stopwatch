import React, { useRef, useState } from "react";
import css from './Timer.module.css';

const Timer = () => {

    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPause, setIsPause] = useState(false);
    const countRef = useRef(null);



    const handleStart = () => {
        setIsActive(true)
        setIsPause(true)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }

    const handlePause = () => {
        clearInterval(countRef.current)
        setIsPause(false)
    }

    const handleStop = () => {
        clearInterval(countRef.current)
        setIsActive(false)
        setIsPause(false)
        setTimer(0)
    }

    return (
        <div className={css.timer}>
            <h3 className={css.title}>React Stopwatch</h3>
            <div>
                <p className={css.number}>{timer}</p>
                <div>
                    <button className={css.button} onClick={handleStart}>Start</button>
                    <button className={css.button} onClick={handlePause}>Pause</button>
                    <button className={css.button} onClick={handleStop} >Stop</button>
                </div>
            </div>
        </div>
    )
}

export default Timer;