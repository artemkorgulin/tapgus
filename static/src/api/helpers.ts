import { MOCK_AVATARS } from './TEMPORARY_mocks/avatars';

export const getFakeAvatar = (index: number) =>
    MOCK_AVATARS[index % MOCK_AVATARS.length];
