
Совокупность методов `createRouteMap` и `createRoute` позволяет:
- использовать общую логику для создания крошек
- конкретизировать их точечно.

Например:

Мы можем создавать роуты при помощи `createRoute`:
```typescript
const EXAMPLE_ROUTES = {
    HOME: createRoute('/', 'Home'),
    TEAMWORK: createRoute('/teamwork'),
    TEAMS: createRoute('/teams'),
    PRODUCTS: createRoute('/products'),
    KNOWLEDGE: createRoute('/knowledge'),
    COMPANY: createRoute('/company'),
    PAGE_404: createRoute('/404', null),
};

result:
{
 "HOME": {
  "PATH": "/",
  "CRUMB": "Home"
 },
 "TEAMWORK": {
  "PATH": "/teamwork",
  "CRUMB": "teamwork"
 },
 "TEAMS": {
  "PATH": "/teams",
  "CRUMB": "teams"
 },
 "PRODUCTS": {
  "PATH": "/products",
  "CRUMB": "products"
 },
 "KNOWLEDGE": {
  "PATH": "/knowledge",
  "CRUMB": "knowledge"
 },
 "COMPANY": {
  "PATH": "/company",
  "CRUMB": "company"
 },
 "PAGE_404": {
  "PATH": "/404",
  "CRUMB": null
 }
}
```

Мы так же можем упростить код до:

```typescript
const EXAMPLE_ROUTES = createRouteMap({
    HOME: createRoute('/', 'Home'),
    TEAMWORK: '/teamwork',
    TEAMS: '/teams',
    PRODUCTS: '/products',
    KNOWLEDGE: '/knowledge',
    COMPANY: '/company',
    PAGE_404: createRoute('/404', null),
});
```
Таким образом мы получим идентичный результат, с меньшим количество бойлерплейта.
