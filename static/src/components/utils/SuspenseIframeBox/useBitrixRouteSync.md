```typescript
export const useBitrixRouteSync = () => {
    const navigate = useNavigate();
    
    // 1. получаем ссылку, на которую соизволил перейти пользователь внутри iframe
    const nextUrl = useBitrixMessageData<string>(BRIDGE_ACTION.NAVIGATE);

    useEffect(() => {
        if (nextUrl) {
            try {
                const url = new URL(nextUrl);
                const { pathname: bitrixPathname, search } = url;

                // 2. проверяем наличие роута в нашем маппинге роутов
                const reactPathname = getReactPath(bitrixPathname);

                if (reactPathname) {
                    // 3.a переходим по нашему роуту в реакт, и передаем url для iframe
                    navigate(`${reactPathname}${search}`, {
                        state: {
                            bitrixPathname,
                        },
                    });
                } else {
                    // 3.b либо переходим по дежурному роуту /bitrix/{путь_из_бэкенд_фронта} 
                    navigate(
                        `${ROUTES.BITRIX_ROUTE}${bitrixPathname}${search}`,
                    );
                }
            } catch (error) {
                // если в nextUrl будет строка без протокола, то new URL(nextUrl) выбросит ошибку 
                console.error(error);
            }
        }
    }, [nextUrl, navigate]);
};


```
