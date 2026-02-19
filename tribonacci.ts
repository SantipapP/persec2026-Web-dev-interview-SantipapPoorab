export function tribonacci(signature: number[], n: number): number[] {
    // ถ้า n น้อยกว่าหรือเท่ากับจำนวนค่าเริ่มต้น ให้คืนค่าตามจำนวน n
    if (n <= signature.length) return signature.slice(0, n);
    
    const result = [...signature];
    while (result.length < n) {
        // หาผลรวมของ 3 ตัวล่าสุดใน Array
        const nextValue = result.slice(-3).reduce((sum, val) => sum + val, 0);
        result.push(nextValue);
    }
    return result;
}