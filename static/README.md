# Проект название

## Содержание

- [Стек](#стек)
- [Описание переменных окружения](#описание-env-variables)
- [Сборка проекта](#сборка-проекта)
- [Запуск проекта в режиме разработки](#запуск-проекта-в-режиме-разработки)
- [Глоссарий](#глоссарий)
- [Команды](#команды)
- [Дополнительно](#дополнительно)
- [Технический долг](#технический-долг)

## Стек
`TypeScript`, `React`, `Tailwind`, `css-modules`, `sass`, `vite`

## Описание ENV Variables

| Переменная в ENV                   | В коде                            | Описание                                                      | Применение                                                                                                                                |
|------------------------------------|-----------------------------------|---------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| **Boolean variables (true/false)** |                                   |                                                               |                                                                                                                                           |
| VITE_USE_MOCKED_USER               | ENV_USE_MOCKED_USER               | on/off моковые данные для viewer.                             | Спасает, если не работает аутентификация в режиме разработки. Поможет с отладкой скрываемых роутов.                                       |
| VITE_USE_IFRAMES                   | ENV_USE_IFRAMES                   | on/off глобальное использование iframe-контента               | Используется в `HOC` для оборачивания всех не закрученных страниц.                                                                        |
| VITE_USE_BITRIX_EMULATOR           | ENV_USE_BITRIX_EMULATOR           | on/off панель эмулятора postMessage                           | Для отладки и эмуляции обмена сообщениями с iframe.                                                                                       |
| VITE_USE_IFRAME_DEBUG               | ENV_USE_IFRAME_DEBUG               | on/off панель с мета-информацией о контенте в iframe          | В целях тестирования и отладки проекта. Отображает iframe-src и явно указывает на то, что перед нами iframe-content или страница в React. |
| **String variables**               |
| VITE_BASE_API_URL                  | ENV_BASE_API_URL                  | Путь для запросов                                             | В `DEV` в целях проксирования указываем `/api`; В `PROD` указываем домен с API.                                                           |
| VITE_BASE_API_URL_DEV_PROXY        | ENV_BASE_API_URL_DEV_PROXY        | Домен для проксирования запросов в режиме разработки          | При необходимости работы с разными версиями API: `DEV`, `STAGE`, `PROD` и др.                                                             |
| VITE_EXTERNAL_BASE_URL             | ENV_EXTERNAL_BASE_URL             | Домен с которого будет загружаться iframe-content             | Должен совпадать с доменом клиетского приложения. Поэтому необходимо настроить hosts.                                                     |
| **Deprecated**                     |              
| VITE_USE_LEGACY_AUTH               | ENV_USE_LEGACY_AUTH               | `true/false`  использовать устаревший метод авторизации       | В настоящий момент совместимость кодовой базы с данным подходом не поддерживается. Планируется удалить.                                   |
| VITE_BASE_LEGACY_API_URL           | ENV_BASE_LEGACY_API_URL           | Путь для запросов                                             | Не поддерживается.                                                                                                                        |
| VITE_BASE_LEGACY_API_URL_DEV_PROXY | ENV_BASE_LEGACY_API_URL_DEV_PROXY | Абсолютный url для проксирования запросов в режиме разработки | Не поддерживается.                                                                                                                        |

Все ENV-переменные доступны в коде через импорт:
```javascript
import { ENV_USE_MOCKED_USER } from 'app-env';
```

## Сборка проекта

Установка [yarn modern](https://yarnpkg.com/getting-started/install)

```bash
corepack enable
```

Установка зависимостей:

```bash 
yarn
```

Сборка проекта `PROD`:

```
yarn build
```

После чего проект будет доступен в папке `dist`.

## Запуск проекта в режиме разработки

```
yarn dev
```

Добавьте следующие записи в файл hosts:

```
::1 localhost
127.0.0.1 localhost
```

Где: `localhost` - домен, с которого загружается iframe контент

После этого проект станет доступен по адресу:
https://localhost:9999/

Фронтенд и iframe-контент должны быть на одном домене.

Поэтому если нужно загрузить контент с другого домена, то вам необходимо прописать доп.домен в hosts.

Например:

Env:
```
VITE_BASE_API_URL_DEV_PROXY=https://localhost
VITE_EXTERNAL_BASE_URL=https://localhost
```

Hosts:
```
::1 localhost
127.0.0.1 localhost
```

## Глоссарий

| Термин        | Определение                          |
|---------------|--------------------------------------|
| viewer        | Текущий авторизованный пользователь  |
| user          | Любой другой пользователь            |


## Команды

| Крманда       | Определение                                                                                                                                                     |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| dev           | Запуск проекта в режиме разработки                                                                                                                              |
| test          | Запуск тестов                                                                                                                                                   |
| build         | Сборка проекта                                                                                                                                                  |
| lint          | Запуск проверки ESLint                                                                                                                                          |
| fix           | Исправление ошибок ESLint                                                                                                                                       |
| preview       | Запуск проекта в режиме production                                                                                                                              |
| analyze       | Запуск анализатора сборки                                                                                                                                       |
| check-commit  | Запуск проверки текста коммита (commitlint)                                                                                                                     |
| release-notes | Добавляет в буфер обмена список влитых задач после крайнего тега git.<br/>Запуск: `yarn release-notes dev`, где: `dev` - кусочек тега. Отвечающий за окружение. |


## Дополнительно

- [Рекомендуемые настройки WebStorm](/docs/ide.md)
- [CSS Style Guide](/docs/css.md)
- [svg path to clip-path converter](https://www.plantcss.com/css-clip-path-converter)
- [SwitchHosts](https://switchhosts.vercel.app/) помогает управлять файлом hosts
- Набор некоторых ui компонентов: https://localhost:9999/uibook
- Для обработки изображений используется [`vite-imagetools`](https://github.com/JonasKruckenberg/imagetools/tree/main/packages/vite)
    - Синтаксис: `import defaultAvatar from 'assets/temp/avatar.webp?w=48&h=48&format=webp&img';`
    - В конце добавляем `&img`, это [обходной путь](https://github.com/JonasKruckenberg/imagetools/issues/160#issuecomment-1009292026) для TypeScript
- Команда `yarn release-notes dev` копирует в буфер обмена список изменений с последнего релиза проекта
- При необходимости пишем тесты

## Технический долг

- Настроить minify [[docs](https://vitejs.dev/config/build-options.html#build-minify)]
- Настроить husky [[docs](https://typicode.github.io/husky/)]
- Перейти с [`jose`](https://www.npmjs.com/package/jose) на [`axios-jwt`](https://www.npmjs.com/package/axios-jwt)
- Перенести некоторые зависимости из devDependencies в dependencies для `yarn install --production[=true|false]`
- Создать конфиг для Env
