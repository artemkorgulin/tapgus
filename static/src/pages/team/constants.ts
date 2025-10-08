import { ROUTES } from 'utils/constants/routes';
import { convertToRelative, setDisabled } from 'utils/helpers/nav-items';
import type { TNavItem } from 'utils/types/elements';

export const NAV_TEAM: TNavItem[] = convertToRelative([
    { path: '', title: 'main' },
    {
        path: ROUTES.TEAMS_STATISTICS,
        title: 'statistics',
        isDisabled: true,
    },
    {
        path: ROUTES.TEAMS_LEGEND,
        title: 'legend',
        isDisabled: true,
    },
    {
        path: ROUTES.TEAMS_CALENDAR_AND_TASKS,
        title: 'calendar and tasks',
    },
    {
        path: ROUTES.TEAMS_RESOURCES,
        title: 'resources',
        isDisabled: true,
    },
    {
        path: ROUTES.TEAMS_REPORTS_AND_PLANS,
        title: 'reports and plans',
    },
    {
        path: ROUTES.TEAMS_EVENTS,
        title: 'events',
        isDisabled: true,
    },
    {
        path: ROUTES.TEAMS_TOOLS,
        title: 'tools',
        isDisabled: true,
    },
]);

export const NAV_TEAM_LIST = setDisabled(NAV_TEAM);
