export const getClipboardText = async () => {
    if (!navigator.clipboard) {
        console.error('navigator.clipboard is not available!');
        return null;
    }

    try {
        return await navigator.clipboard.readText();
    } catch (error) {
        console.error(error);
        return null;
    }
};
