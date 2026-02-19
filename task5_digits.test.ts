import { test } from 'node:test';
import assert from 'node:assert';
import { rearrangeDigits } from './digitRearranger';
import { tribonacci } from './tribonacci';

test('Task 5: เรียงตัวเลขภายในจากมากไปน้อย', () => {
  assert.strictEqual(rearrangeDigits(3008), 8300);
  assert.strictEqual(rearrangeDigits(1989), 9981);
});