import { test } from 'node:test';
import assert from 'node:assert';
import { autocomplete } from './autocomplete';

test('Task 4: Priority-based autocomplete function.', () => {
  const items = ["Mother", "Think", "Worthy", "Apple", "Android"];
  const result = autocomplete("th", items, 2);
  const expected = ["Think", "Mother"];
  
  assert.deepStrictEqual(result, expected);
});