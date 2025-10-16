import React, { useState, useRef, useEffect } from 'react';
import css from "./../../../layouts/main/style.module.scss";

const CountdownTimer = ({
        initialTime,
        onComplete
    }) => {

    const [timeRemaining, setTimeRemaining] = useState(initialTime);

    const intervalRef = useRef(null);

    useEffect(() => {
        // Start the countdown
        intervalRef.current = setInterval(() => {
            setTimeRemaining(prevTime => {
                if (prevTime <= 1) {
                    // Clear interval when we reach zero
                    clearInterval(intervalRef.current);
                    onComplete?.();
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    // Convert seconds to hours, minutes, seconds
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;
    return (
        <div className={css.points_user_coldown_block}>
            <div className={css.points_user_coldown_head}>Cooldown</div>
            <div className={css.points_user_coldown_head}>До начала раунда осталось:</div>
            <div className={css.points_user_coldown}>
                {hours.toString().padStart(2, '0')}:
                {minutes.toString().padStart(2, '0')}:
                {seconds.toString().padStart(2, '0')}
            </div>
        </div>
    );
};

export default CountdownTimer;

