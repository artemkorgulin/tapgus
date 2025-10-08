export const createNestedRoutes = <T extends object = object>(
    basePath: string,
    routes: T,
): T => {
    return Object.entries(routes).reduce(
        (acc, [key, pathname]) => ({ ...acc, [key]: `${basePath}${pathname}` }),
        {} as Record<string, string>,
    ) as T;
};
