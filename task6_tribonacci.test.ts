import { test } from 'node:test';
import assert from 'node:assert';
import { tribonacci } from './tribonacci';

test('Task 6: Calculate the Tribonacci sequence.', () => {
  assert.deepStrictEqual(tribonacci([1, 3, 5], 5), [1, 3, 5, 9, 17]);
  assert.deepStrictEqual(tribonacci([2, 2, 2], 3), [2, 2, 2]);
  assert.deepStrictEqual(tribonacci([10, 10, 10], 4), [10, 10, 10, 30]);
});