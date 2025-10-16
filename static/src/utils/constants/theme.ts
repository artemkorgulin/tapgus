import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig, { type Colors, type DefaultColors } from '#tw-config';

const tw = resolveConfig(tailwindConfig);
const { theme: THEME } = tw as unknown as {
    theme: (typeof tw)['theme'] & { colors: DefaultColors & Colors };
};

export { THEME };

// todo:
//  Обратите внимание, что это транзитивно подключит множество наших
//  зависимостей во время сборки, что приведет к увеличению размера пакета
//  на стороне клиента. Чтобы избежать этого, мы рекомендуем использовать
//  такой инструмент, как Babel-plugin-preval , для создания статической
//  версии вашей конфигурации во время сборки.

// todo: проверил: действительно прибавляет около 30-60кб, но не является блокером.
//  Поэтому описал и перенес задачу
