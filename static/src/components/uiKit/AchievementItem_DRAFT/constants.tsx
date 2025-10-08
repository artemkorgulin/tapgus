import CrownIcon from 'assets/achivs/crown.svg?react';
import DiamondIcon from 'assets/achivs/diamond.svg?react';
import IdeaIcon from 'assets/achivs/idea.svg?react';
import RocketIcon from 'assets/achivs/rocket.svg?react';
import SettingsIcon from 'assets/achivs/settings.svg?react';

export const ACHIV_ICONS_DRAFT: Record<string, JSX.Element> = {
    diamond: <DiamondIcon />,
    idea: <IdeaIcon />,
    rocket: <RocketIcon />,
    settings: <SettingsIcon />,
    crown: <CrownIcon />,
};

export const ACHIV_TITLES_DRAFT: Record<string, string> = {
    diamond: 'Ценность 2023',
    idea: 'Команда CoDev',
    rocket: 'Ракета 2023',
    settings: 'Настройщик 2023',
    crown: 'PRE-EXPERT',
};
