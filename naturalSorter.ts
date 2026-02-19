export function customSort(arr: string[]): string[] {
    return [...arr].sort((a, b) => {
        // ใช้ localeCompare พร้อม numeric: true เพื่อให้เลข 2 มาก่อนเลข 19
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    });
}