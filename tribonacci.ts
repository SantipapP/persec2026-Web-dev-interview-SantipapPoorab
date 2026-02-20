export function tribonacci(signature: number[], n: number): number[] {
    if (n <= signature.length) return signature.slice(0, n);
    
    const result = [...signature];
    while (result.length < n) {
        const nextValue = result.slice(-3).reduce((sum, val) => sum + val, 0);
        result.push(nextValue);
    }
    return result;
}