import type { TUserData } from 'api/api.v2.types';

const AUTH_TOKEN_NAME = 'authToken';
const AUTH_TOKEN_EXPIRES_DAY = 1;

export const AUTH_CONSTANTS = {
    AUTH_TOKEN_NAME,
    AUTH_TOKEN_EXPIRES_DAY,
};

export const MOCKED_VIEWER: TUserData = {
    id: 'mocked_viewer_id',
    fio: 'MOCKED VIEWER',
    email: 'itdep@8bitov.com',
    avatar: '',
    personalPhoto: null,
    achivements: [],
    teams: new Array(23).fill(null).map((_, index) => ({
        id: String(index),
        accent: 'Frontend Developer',
        name: `#${String(index).padStart(2, '0')}`,
        avatar: '',
    })),
};

export const MOCKED_USER: TUserData = {
    id: 'mocked_user_id',
    fio: 'MOCKED USER',
    email: 'itdep@8bitov.com',
    avatar: '',
    personalPhoto: null,
    achivements: [],
    teams: new Array(23).fill(null).map((_, index) => ({
        id: String(index),
        accent: 'Frontend Developer',
        name: `#${String(index).padStart(2, '0')}`,
        avatar: '',
    })),
};
