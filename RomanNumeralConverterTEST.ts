// roman.test.ts
import { test } from 'node:test';
import assert from 'node:assert';
import { intToRoman, romanToInt } from './Roman';

test('ควรแปลงตัวเลขเป็นโรมันได้อย่างถูกต้อง', () => {
  assert.strictEqual(intToRoman(1), 'I');
  assert.strictEqual(intToRoman(4), 'IV');
  assert.strictEqual(intToRoman(9), 'IX');
  assert.strictEqual(intToRoman(1989), 'MCMLXXXIX');
  assert.strictEqual(intToRoman(3999), 'MMMCMXCIX');
});

test('ควรแปลงโรมันกลับเป็นตัวเลขได้อย่างถูกต้อง', () => {
  assert.strictEqual(romanToInt('I'), 1);
  assert.strictEqual(romanToInt('IV'), 4);
  assert.strictEqual(romanToInt('MCMLXXXIX'), 1989);
});

test('ควรดักจับรูปแบบที่ผิดกฎ (Validation)', () => {
  // ทดสอบเคสที่คุณสงสัย
  assert.strictEqual(romanToInt('IIII'), -1, 'IIII ต้องไม่ผ่าน');
  assert.strictEqual(romanToInt('MMMM'), -1, 'MMMM ต้องไม่ผ่าน');
  assert.strictEqual(romanToInt('VV'), -1, 'VV ต้องไม่ผ่าน');
  assert.strictEqual(romanToInt('ABC'), -1, 'ตัวอักษรแปลกปลอมต้องไม่ผ่าน');
});

test('ควรจัดการกับตัวเลขที่อยู่นอกขอบเขต', () => {
  assert.strictEqual(intToRoman(0), 'INVALID');
  assert.strictEqual(intToRoman(4000), 'INVALID');
});