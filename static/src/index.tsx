import './assets/styles/index.scss';
import './lib/i18n';

import React from 'react';
import { MotionConfig } from 'framer-motion';
import { createRoot } from 'react-dom/client';

import App from './app';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <MotionConfig reducedMotion='user'>
            <App />
        </MotionConfig>
    </React.StrictMode>,
);
