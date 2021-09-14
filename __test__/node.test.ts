/* eslint-env jest */
import { node } from '../src';

describe('test common', () => {
  test('debounce', async () => {
    expect(node.getMd5('hello world')).toBe('5eb63bbbe01eeed093cb22bb8f5acdc3');
  });
});
