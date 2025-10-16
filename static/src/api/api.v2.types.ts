import type { Nullable } from 'utils/types/common';

export interface IBaseListItem {
    id: string;
}

export type TBitrixResponse<T = unknown> = {
    message: string;
    data: T;
};

export type TLoginReq = {
    login: string;
    password: string;
    remember: boolean;
};

export type TRoundAddReq = {
    id: string;
};

export type TRoundItemeq = {
    roundId: string;
};

export type TCheckRoleReq = {
    token: string | undefined
};

export type RoundsList = {
    login: string;
    password: string;
    remember: boolean;
};

export type TLoginRes = { userId: string; userSessid: string; userEmail: string; userUserName: string; validateUser: boolean };
export type TLoginJwtRes = { accessToken: string; reload: boolean; validateUser: boolean };
export type TRoundListRes = {
    message: string;
    status: number;
    data: {
        data: [
            {
                id: number;
                round_active: string;
                round_name: string;
                round_user: string;
                round_begin_time: string;
                round_end_time: string;
                round_status: string
            }
        ]
    }
};
export type TCheckRoleRes = {
    message: string;
    status: number;
    data: {
        data: boolean
    }
};

export type TRoundAddRes = { accessToken: string; reload: boolean; validateUser: boolean };
export type TRoundItemRes = { winer: any; myPoints: string; allPoints: string; roundData: any };

interface IUserTeam_DRAFT {
    fields: {
        teamName: string;
        teamId: string;
        roleName: string;
        userId: string;
    };
    fname: string;
    lname: string;
    position: string;
    team_url: string;
    avatar: string;
    achievements: unknown[];
}

export type TUserTeamsList_DRAFT = {
    [teamId: string]: IUserTeam_DRAFT;
};

export type TAchievement_DRAFT = {
    id: string;
    name: string;
    picture: string;
};

export type TUserDataTeamsType = {
    workCompany: string;
    Email: string;
    Id: string;
    achivements: TAchievement_DRAFT[][];
    teams: TUserTeamsList_DRAFT;
};

export type TUserDataRaw = {
    id: number;
    fio: string;
    personalPhoto: string;
    specialistPhoto: string;
    teams: TUserDataTeamsType;
    achivements: TAchievement_DRAFT[];
};

// todo: add big photo?
export type TUserData = {
    id: string;
    fio: string;
    avatar: string;
    personalPhoto: Nullable<string>;
    email: string;
    achivements: TAchievement_DRAFT[];
    teams: Array<IListBlockItemTeams>;
};

export interface IListBlockItemTeams extends IBaseListItem {
    accent: string;
    name: string;
    avatar: string;
}
export interface IListBlockItemRounds extends IBaseListItem {
    accent: string;
    name: string;
    avatar: string;
}

export type TTeamMemberAchivRaw = {
    image: string;
    tooltip: string;
};
export type TTeamMemberRaw = {
    id: string;
    idrole: string;
    fname: string;
    lname: string;
    avatar: string;
    position: string;
    positionid: string;
    achievements: Array<TTeamMemberAchivRaw> | false;
    url: string;
};

export type TProductRaw = {
    id: string;
    name: string;
    previewPicture: string;
};

export type TTeamDetailsRaw = {
    name: string;
    previewText: string;
    detailText: string;
    picture: string;
    achievements: string[] | false;
    members: Array<TTeamMemberRaw>;
    products: Array<TProductRaw>;
};

export type TTeamMember = IListBlockItemTeams &
    Omit<TTeamMemberRaw, 'achievements'> & {
        achievements: Nullable<Array<TTeamMemberAchivRaw>>;
    };

export type TTeamDetails = Omit<TTeamDetailsRaw, 'achievements' | 'members'> & {
    achievements: Nullable<Array<string>>;
    members: Array<TTeamMember>;
};

export type TTeamsListRaw = {
    items: Array<{
        id: string;
        avatar: string;
        name: string;
        members: number;
    }>;
};

export type TProductsListRaw = {
    items: Array<{
        id: string;
        avatar: string;
        name: string;
    }>;
};
