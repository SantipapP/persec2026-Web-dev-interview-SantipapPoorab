// roman.ts

export function intToRoman(num: number): string {
  if (num <= 0 || num > 3999) return "INVALID";
  const romanMapping = [
    { value: 1000, symbol: 'M' }, { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' }, { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' }, { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' }, { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' }, { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' }, { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' },
  ];
  let result = "";
  let remaining = num;
  for (const item of romanMapping) {
    while (remaining >= item.value) {
      result += item.symbol;
      remaining -= item.value;
    }
  }
  return result;
}

export function romanToInt(s: string): number {
  const upperS = s.toUpperCase().trim();
  const romanRegex = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  if (!romanRegex.test(upperS) || upperS === "") return -1;

  const charMap: Record<string, number> = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
  };

  let total = 0;
  for (let i = 0; i < upperS.length; i++) {
    const currentVal = charMap[upperS[i]];
    const nextVal = charMap[upperS[i + 1]];
    if (nextVal && currentVal < nextVal) total -= currentVal;
    else total += currentVal;
  }
  return total;
}