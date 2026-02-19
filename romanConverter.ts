const ROMAN_TABLE = [
    { value: 1000, symbol: 'M' }, { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' }, { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' }, { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' }, { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' }, { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' }, { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
];

// ฟังก์ชันแปลงเลข Int เป็น String โรมัน
export function intToRoman(num: number): string {
    let result = "";
    let remaining = num;
    for (const item of ROMAN_TABLE) {
        while (remaining >= item.value) {
            result += item.symbol;
            remaining -= item.value;
        }
    }
    return result;
}

// ฟังก์ชันแปลง String โรมัน เป็น Int
export function romanToInt(s: string): number {
    const charMap: Record<string, number> = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    };
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const current = charMap[s[i]];
        const next = charMap[s[i + 1]];
        if (next && current < next) total -= current;
        else total += current;
    }
    return total;
}