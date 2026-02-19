export function rearrangeDigits(num: number): number {
    const sorted = num.toString().split('')
        .sort((a, b) => parseInt(b) - parseInt(a))
        .join('');
    return parseInt(sorted);
}