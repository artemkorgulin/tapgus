import { useEffect } from 'react';
import { useNavigate } from 'react-router';

// todo: данный хук должен быть удален
//  после реализации моста postMessage
// export const useCookieListener = (isListenCookie: boolean, interval = 500) => {
export const useCookieListener = (interval = 500) => {
    const navigate = useNavigate();

    useEffect(() => {
        let lastCookie = document.cookie;
        const intervalId = window.setInterval(() => {
            const cookie = document.cookie;

            if (cookie !== lastCookie) {
                clearInterval(intervalId);
                navigate('/');
                lastCookie = cookie;
            }
        }, interval);

        return () => {
            clearInterval(intervalId);
        };
    }, [interval, navigate]);
};
