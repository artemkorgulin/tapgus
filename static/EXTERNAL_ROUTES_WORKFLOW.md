Добавление роута, для работы react + external-route:
- добавить роут в src/utils/constants/routes.ts
- дополнить маппинг src/components/utils/SuspenseIframeBox/utils/constants.ts

Как правило этого достаточно, чтобы сопоставить роуты для iframe.

Если это новый раздел, то добавить роут в src/pages/{имя раздела}/index.tsx:
```js
export const RDP_ROUTES = [
    {
        path: ROUTES.RDP,
        element: <LayoutContent navItems={NAV_VIEWER_ABS} />,
        children: [
            {
                index: true,
                element: <WithIframe fallback={<>rdp page</>} />,
            },
        ],
    },
];
```

Если добавляем верстку страницы, то добавить роут в соотв раздел.

Например, добавляем страницу TEAMS_REPORTS_AND_PLANS в раздел команд:
```javascript
{
    path: ROUTES.TEAMS_DETAILS,
    element: <LayoutContent navItems={NAV_TEAM} />,
    children: [
        {
            index: true,
            handle: setCrumb(TeamDetailsCrumb),
            element: <WithIframe fallback={<TeamDetails />} />,
        },
        // новая страница:
        {
            path: ROUTES.TEAMS_REPORTS_AND_PLANS,
            element: <WithIframe fallback={<TeamReports />} />,
        },
        { path: '*', element: <IframePage /> },
    ],
},
```
