import { test } from 'node:test';
import assert from 'node:assert';
import { isValidBrackets } from './bracketValidator';

test('Task 2: Validate the correctness of parentheses.', () => {
  assert.strictEqual(isValidBrackets("()"), true);       //
  assert.strictEqual(isValidBrackets("([]]"), false);     //
  assert.strictEqual(isValidBrackets("([{}])"), true);    //
  assert.strictEqual(isValidBrackets("([[{}]]]"), false); //
  assert.strictEqual(isValidBrackets(")"), false);       //
  assert.strictEqual(isValidBrackets("([)]"), false);     //
  assert.strictEqual(isValidBrackets("([)"), false);      //
  assert.strictEqual(isValidBrackets("{"), false);        //
});