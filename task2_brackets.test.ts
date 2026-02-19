import { test } from 'node:test';
import assert from 'node:assert';
import { isValidBrackets } from './bracketValidator';

test('Task 2: ตรวจสอบความถูกต้องของวงเล็บ', () => {
  // ค่าเหล่านี้อ้างอิงตาม "ตัวอย่างผลลัพธ์" ในรูป image_2bbf6d.png
  assert.strictEqual(isValidBrackets("()"), true);       //
  assert.strictEqual(isValidBrackets("([])"), false);     // (โจทย์ต้องการ false)
  assert.strictEqual(isValidBrackets("([{}])"), true);    //
  assert.strictEqual(isValidBrackets("([[{}]]]"), false); //
  assert.strictEqual(isValidBrackets(")"), false);       //
  assert.strictEqual(isValidBrackets("([)]"), false);     //
  assert.strictEqual(isValidBrackets("([)"), false);      //
  assert.strictEqual(isValidBrackets("{"), false);        //
});