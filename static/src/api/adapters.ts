import { addBitrixPrefixToRelativeLinks } from 'utils/helpers/text';

import uniqBy from 'lodash/uniqBy';

import type { IListViewData } from 'components/common/ListView/types';
import type { TNotifyMessage } from 'components/common/Notifications/type';

import type {
    TProductsListRaw,
    TTeamDetails,
    TTeamDetailsRaw,
    TTeamMember,
    TTeamsListRaw,
    TUserData,
    TUserDataRaw,
} from './api.v2.types';

export const adapters = {
    userData: (data: TUserDataRaw): TUserData => {
        // todo: удалить, если на бэке исправят структуру teams
        const teams = Object.keys(data.teams.teams).map((teamId) => {
            const team = data.teams.teams[teamId];
            return {
                id: teamId,
                avatar: team.avatar,
                achievements: team.achievements,
                accent: team.fields.roleName,
                name: team.fields.teamName,
            };
        });

        return {
            id: data.teams.Id,
            fio: data.fio,
            avatar: data.personalPhoto,
            personalPhoto: data.specialistPhoto,
            email: data.teams.Email,
            achivements: data.achivements,
            teams,
        };
    },

    usersFound: (data: TUserDataRaw[]) =>
        data.map(({ id, fio }) => ({ id: String(id), fio })),

    teamsList: (data: TTeamsListRaw): Array<IListViewData> => {
        return uniqBy(data.items, ({ id }) => id).map((el, index) => ({
            ...el,
            members: el.members || 0,
            // todo: исправить после починки картинок на бэке
            avatar: String(index)
        }));
    },

    teamDetails: (data: TTeamDetailsRaw): TTeamDetails => {
        const achievements =
            data.achievements === false ? null : data.achievements;

        const members: TTeamMember[] = data.members.map((member, index) => {
            return {
                ...member,
                accent: member.position,
                name: `${member.fname} ${member.lname}`,
                // todo: исправить после починки картинок на бэке
                avatar: String(index),
                achievements:
                    member.achievements === false ? null : member.achievements,
            };
        });

        return {
            ...data,
            achievements,
            members,
        };
    },

    productsList: (data: TProductsListRaw): Array<IListViewData> => {
        return uniqBy(data.items, ({ id }) => id).map((el, index) => ({
            ...el,
            // todo: исправить после починки картинок на бэке
            // avatar: el.Avatar,
            avatar: String(index),
        }));
    },

    notifyMessagesV1: (data: TNotifyMessage[]): TNotifyMessage[] =>
        data.map((message) => ({
            ...message,
            TEXT: addBitrixPrefixToRelativeLinks(message.TEXT),
        })),
};
