import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

// --- Logic Functions ---

const romanMapping = [
  { value: 1000, symbol: 'M' }, { value: 900, symbol: 'CM' },
  { value: 500, symbol: 'D' }, { value: 400, symbol: 'CD' },
  { value: 100, symbol: 'C' }, { value: 90, symbol: 'XC' },
  { value: 50, symbol: 'L' }, { value: 40, symbol: 'XL' },
  { value: 10, symbol: 'X' }, { value: 9, symbol: 'IX' },
  { value: 5, symbol: 'V' }, { value: 4, symbol: 'IV' },
  { value: 1, symbol: 'I' },
];

function intToRoman(num: number): string {
  if (num <= 0) return "รองรับเฉพาะเลขบวกเท่านั้นครับ";
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

function romanToInt(s: string): number {
  const upperS = s.toUpperCase().trim();

  // 1. เพิ่ม Regex ตรวจสอบความถูกต้องตามกฎ Modern Roman Numerals
  // กฎ: ห้ามซ้ำเกิน 3 ตัว (I, X, C, M) และ V, L, D ห้ามซ้ำเลย
  const romanRegex = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  
  if (!romanRegex.test(upperS)) {
    return -1; // ส่งค่า -1 กลับไปเพื่อให้โปรแกรมรู้ว่า Format ผิด
  }

  const charMap: Record<string, number> = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
  };

  let total = 0;
  for (let i = 0; i < upperS.length; i++) {
    const currentVal = charMap[upperS[i]];
    const nextVal = charMap[upperS[i + 1]];

    if (nextVal && currentVal < nextVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }
  }
  return total;
}

// --- Main Interactive Loop ---

async function startApp() {
  console.clear();
  console.log("========================================");
  console.log("   ยินดีต้อนรับสู่เครื่องมือแปลงเลขโรมัน");
  console.log("      (พิมพ์ 'exit' หรือ 'q' เพื่อออก)");
  console.log("========================================\n");

  while (true) {
    const choice = await rl.question("เลือกโหมด [1: เลข->โรมัน | 2: โรมัน->เลข]: ");
    
    // เงื่อนไขออกจากโปรแกรม
    if (choice.toLowerCase() === 'exit' || choice.toLowerCase() === 'q') break;

    if (choice === "1") {
      const inputVal = await rl.question("🔢 ใส่ตัวเลข (เช่น 1989): ");
      if (inputVal.toLowerCase() === 'exit' || inputVal.toLowerCase() === 'q') break;
      
      const num = parseInt(inputVal);
      if (!isNaN(num)) {
        console.log(`✨ ผลลัพธ์: \x1b[32m${intToRoman(num)}\x1b[0m\n`);
      } else {
        console.log("❌ กรุณาใส่ตัวเลขที่ถูกต้องครับ\n");
      }
      
    } else if (choice === "2") {
      const inputVal = await rl.question("🏛️  ใส่เลขโรมัน (เช่น MCMLXXXIX): ");
      if (inputVal.toLowerCase() === 'exit' || inputVal.toLowerCase() === 'q') break;
      
      const result = romanToInt(inputVal);
      if (result !== -1) {
        console.log(`✨ ผลลัพธ์: \x1b[32m${result}\x1b[0m\n`);
      } else {
        console.log("❌ รูปแบบเลขโรมันไม่ถูกต้องครับ\n");
      }
      
    } else {
      console.log("⚠️  กรุณาเลือก 1 หรือ 2 เท่านั้นครับ\n");
    }
  }

  console.log("\nขอบคุณที่ใช้งานครับ! บ๊ายบาย 👋");
  rl.close();
}

startApp();