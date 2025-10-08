export type Nullable<T> = T | null;

// Тип для получения пересечения ключей двух типов
type IntersectKeys<T, U> = {
    [K in keyof T & keyof U]: T[K] extends U[K] ? K : never;
}[keyof T & keyof U];

// Тип для создания нового типа с пересекающимися полями
export type IntersectTypes<T, U> = Pick<T, IntersectKeys<T, U>> &
    Pick<U, IntersectKeys<T, U>>;
