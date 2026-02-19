export function isValidBrackets(s: string): boolean {
    const stack: string[] = [];
    const map: Record<string, string> = { ')': '(', ']': '[', '}': '{' };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (map[char]) {
            const top = stack.pop();
            if (top !== map[char]) return false;
        } else {
            // กฎพิเศษตามโจทย์: ถ้าตัวปัจจุบันเป็นตัวเปิด และตัวถัดไปก็เป็นตัวเปิด (ซ้อนกัน)
            // โจทย์ในรูป image_2bbf6d.png ระบุว่า "([])" => false
            const nextChar = s[i + 1];
            const isOpening = (c: string) => ['(', '[', '{'].includes(c);
            
            if (isOpening(char) && nextChar && isOpening(nextChar)) {
                return false; // ดักจับการซ้อนกันตามตัวอย่าง
            }
            
            stack.push(char);
        }
    }
    return stack.length === 0;
}