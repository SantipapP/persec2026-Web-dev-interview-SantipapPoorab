import { test } from 'node:test';
import assert from 'node:assert';
import { intToRoman, romanToInt } from './romanConverter';

test('Task 1: แปลงตัวเลขเป็นโรมันได้อย่างถูกต้อง', () => {
  assert.strictEqual(intToRoman(1989), 'MCMLXXXIX');
  assert.strictEqual(intToRoman(2000), 'MM');
  assert.strictEqual(intToRoman(68), 'LXVIII');
  assert.strictEqual(intToRoman(109), 'CIX');
});

test('Task 1: แปลงโรมันกลับเป็นตัวเลขได้อย่างถูกต้อง', () => {
  assert.strictEqual(romanToInt('MCMLXXXIX'), 1989);
  assert.strictEqual(romanToInt('MM'), 2000);
  assert.strictEqual(romanToInt('LXVIII'), 68);
  assert.strictEqual(romanToInt('CIX'), 109);
});