import { test } from 'node:test';
import assert from 'node:assert';
import { customSort } from './naturalSorter';

test('Task 3: Natural sorting of a string array.', () => {
  const input1 = ["TH19", "SG20", "TH2"];
  const expected1 = ["SG20", "TH2", "TH19"];
  assert.deepStrictEqual(customSort(input1), expected1);

  const input2 = ["TH10", "TH3Netflix", "TH1", "TH7"];
  const expected2 = ["TH1", "TH3Netflix", "TH7", "TH10"];
  assert.deepStrictEqual(customSort(input2), expected2);
});