import React from 'react';

interface IContext {
    darkMode: boolean;
    handleChangeSwitch: () => void;
}

export const Context = React.createContext<IContext>({
    darkMode: false,
    handleChangeSwitch: () => {},
});
