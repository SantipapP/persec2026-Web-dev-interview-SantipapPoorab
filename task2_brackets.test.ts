import { test } from 'node:test';
import assert from 'node:assert';
import { isValidBrackets } from './bracketValidator';

test('Task 2: ตรวจสอบความถูกต้องของวงเล็บ', () => {
  assert.strictEqual(isValidBrackets("()"), true);
  assert.strictEqual(isValidBrackets("([])"), false); // ตามตัวอย่างในรูปภาพ
  assert.strictEqual(isValidBrackets("([{}])"), true);
  assert.strictEqual(isValidBrackets("([)]"), false);
  assert.strictEqual(isValidBrackets("{"), false);
});