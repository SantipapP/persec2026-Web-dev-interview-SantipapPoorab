export function customSort(arr: string[]): string[] {
    return [...arr].sort((a, b) => {
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    });
}