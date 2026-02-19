export function isValidBrackets(s: string): boolean {
    const stack: string[] = [];
    const openCloseMap: Record<string, string> = { ')': '(', ']': '[', '}': '{' };

    for (const char of s) {
        if (openCloseMap[char]) {
            // เจอตัวปิด ให้ดึงค่าจาก Stack มาเช็ก
            if (stack.pop() !== openCloseMap[char]) return false;
        } else {
            // เจอตัวเปิด ให้ Push ลง Stack
            stack.push(char);
        }
    }
    return stack.length === 0;
}