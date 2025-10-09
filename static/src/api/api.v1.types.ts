export type TLegacyCheckAuthReq = {
    status: 'success' | 'error';
    token?: string;
    sessid?: string;
};
