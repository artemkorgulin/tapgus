export const getPaddedCount = (value: number, maxValue: number): string => {
    if (value >= maxValue) {
        return String(maxValue);
    }

    const digitCount = Math.max(Math.floor(Math.log10(maxValue)) + 1, 1);
    return String(value).padStart(digitCount, '0');
};
