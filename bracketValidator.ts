export function isValidBrackets(s: string): boolean {
    const stack: string[] = [];
    const map: Record<string, string> = { 
        ')': '(', 
        ']': '[', 
        '}': '{' 
    };

    for (const char of s) {
        if (map[char]) {
            // เจอตัวปิด: ดึงตัวล่าสุดจาก stack มาเช็กว่าคู่กันไหม
            const top = stack.pop();
            if (top !== map[char]) return false;
        } else {
            // เจอตัวเปิด: เก็บลง stack
            stack.push(char);
        }
    }
    // ถ้าจบแล้ว stack ต้องว่างเปล่า (แปลว่าปิดครบทุกคู่)
    return stack.length === 0;
}