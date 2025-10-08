# Примечания по проекту
- Установить yarn modern https://yarnpkg.com/getting-started/install
- Некоторые компоненты и их варианты можно посмотреть на странице https://localhost:9999/uibook
- Чтобы обеспечить локальную работоспособность проекта, необходимо добавить следующую запись в файл hosts:
  - ```::1 localhost
      127.0.0.1 localhost```
  - Где: `localhost` - домен, с которого загружается iframe контент
  - Проект станет доступен по адресу: https://localhost:9999/
  - В определенных случаях домен в HOSTS должен совпадать с доменом куда ссылается iframe. Например:
    - `VITE_EXTERNAL_BASE_URL=https://localhost`
    - `::1 localhost`
- Для процессинга картинок используем [`vite-imagetools`](https://github.com/JonasKruckenberg/imagetools/tree/main/packages/vite)
  - синтаксис: `import defaultAvatar from 'assets/temp/avatar.webp?w=48&h=48&format=webp&img';`
  - вконце добавляем `&img`, это [обходной путь](https://github.com/JonasKruckenberg/imagetools/issues/160#issuecomment-1009292026) для TS;
- Команда `yarn release-notes dev` - копирует в буфер обмена список изменений с последнего релиза проекта

# Рекомендации
- SwitchHosts помогает управлять файлом hosts

# Работа с dev/stage стендами

1. В `VITE_EXTERNAL_BASE_URL` указываем домен, например: `VITE_EXTERNAL_BASE_URL=localhost`
2. Добавляем запись в hosts: `127.0.0.1 localhost`
3. Пользуемся

# Содержание

-   [Технический долг](#Todo)
-   [Рекомендуемые найтройки Webstorm для корректной работы](#Webstorm)
-   [CSS Style Guide](#Css-style-guide)
    -   [Соглашения](#Rules)
    -   [Typography](#Typography)
    -   [Уголки](#Corners)
    -   [Срезы](#Angled-corners)
-   [Вопросы](#Questions)
-   [Глоссарий](#glossary)


# Технический долг <a name="Todo"></a> 
-   minify [[docs](https://vitejs.dev/config/build-options.html#build-minify)]
-   configure husky [[docs](https://typicode.github.io/husky/)]
-   move from [[`jose`](https://www.npmjs.com/package/jose)] to [[`axios-jwt`](https://www.npmjs.com/package/axios-jwt)]
-   перенести некоторые зависимости из devDependencies в dependencies 
  -   затем изменить установку зависимостей на `yarn install --production` в пайплайне
- Создать конфиг для Env (мотивация: сложно переключать режимы legacy (может быть не актуально))
  - Либо удалить legacy режим
  - добавить "простые режимы", аля: 
    - легаси со старым фронтом, 
    - модерн с iframe, 
    - modern на моках, 
    - модерн с отключенными iframe

# Рекомендуемые настройки Webstorm для корректной работы <a name="Webstorm"></a>

Рекомендации:
- включить автоимпорт используя пути из tsconfig:
  - Preferences | Editor | Code Style | TypeScript > Imports (Таб) > "Use paths relative to tsconfig.json"
- включить автофикс Eslint при сохранении файла:
  - Preferences | Languages & Frameworks | JavaScript | Code Quality Tools | ESLint > Run eslint --fix on save
- включить автоформатирование Prettier:
  - Preferences | Languages & Frameworks | JavaScript | Prettier > Run on save
- следовать инструкциям для поддежки IntelliSense внутри компонентов [cva](https://cva.style/docs/getting-started/variants):
  - https://cva.style/docs/getting-started/installation#intellisense

Musthave Plugins:
- [Tailwind CSS](https://plugins.jetbrains.com/plugin/15321-tailwind-css)
- [SASS](https://plugins.jetbrains.com/plugin/11449-sass)


Todo:
- расшарить настройки Webstorm под проект

# CSS Style Guide <a name="Css-style-guide"></a>

## Соглашения <a name="Rules"></a>

- Именовать миксины начиная с "app-". 
  - Это упрощает автокомплит
- Добавлять постфикс "_PSEUDO" в SCREAMING_CASE для всех миксинов, которые так или иначе содержат псевдо-элементы.
  - Это поможет уберечься от проблемы "вложенности псевдоэлементов", пока не настроено тестирование/валидация sass
  - Если проект не собирается, и при этом vite молчит - возможно проблема в этом

Todo:
- app-corners-box_PSEUDO и app-pseudo-corners-rt-lb схожи по смыслу, их можно обьединить
- WARN: вызов ```@include app-corners-box_PSEUDO;``` внутри псевдо-элемента вызовет "тихую" ошибку. 
  - потому что нельзя вкладывать друг в друга псевдо-элементы
  - необходим линтер/тестер/логгер стилей, потому что в таком случае, Vite не выбрасыввает ошибки и проект не загружается
  - в качетсве обходного пути - можно явно обзывать миксины в *_PSEUDO что бы "ловить" такие моменты глазами, но это такое... 
  - также есть логгер от sass https://sass-lang.com/documentation/js-api/interfaces/logger-1/

## Typography <a name="Typography"></a>

-   миксины `app-text-primary`, `app-text-secondary` определяют 2 базовых начертания текста
-   Использование:

```scss
.some-element {
    @include app-text-primary;
}
```

## Уголки <a name="Corners"></a>

-   миксины `app-corner-r` и `app-corner-l` - это стиль с маской "уголков"
-   цвет уголков меняется через bg-color

## Срезы <a name="Angled-corners"></a>

### Срез углов без обводки

-   используйте миксин `app-angled-corners-clip`

```scss
.some-element {
    @include app-angled-corners-clip;
}
```

## Вопросы <a name="Questions"></a>

### Локальные миксины

Кажется хорошей практикой объединять повторяющиеся блоки стилей в миксины.
Но, не обязательно класть все миксины в \_mixins.scss, делая их глобальными.
Бывают случаи, когда нужен миксин, который будет использоваться только в рамках конкретного скоупа css-модуля.

В проекте встречается множество модулей с активным использованием псевдоэлементов.
Это очень быстро превращается в кашу, где становится сложно понять что к чему.
Поэтому стоит подумать над тем, как мы можем об этом позаботиться.
Чтобы облегчить себе жизнь в дальнейшем.

Может быть, вообще не использовать псевдо-элементы?)
Чтобы элементы были явно определены.

# Useful Tools

-   [svg path to clip-path converter](https://www.plantcss.com/css-clip-path-converter)

# Installed plugins:

-   @vitejs/plugin-react-swc
-   vite-tsconfig-paths
-   vite-plugin-svgr to import SVG as React Component [[docs](https://github.com/pd4d10/vite-plugin-svgr)] [[options](https://react-svgr.com/docs/options/)]:
    `import Logo from "./logo.svg?react";`
-   autoprefixer
-   vite-imagetools + его зависимость sharp. см "Технический долг" в начале документа
-   rollup-plugin-visualizer 

# Глоссарий <a name="glossary"></a>
| Слово        | Определение                          |                                  |   |   |
|--------------|--------------------------------------|----------------------------------|---|---|
| viewer       | текущий авторизованный пользователь  |                                  |   |   |
| user         | любой другой пользователь            |                                  |   |   |
| карта связей | карта связей роутов в React и Bitrix | BITRIX_PATH_MAP / REACT_PATH_MAP |   |   |
