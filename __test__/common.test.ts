/* eslint-env jest */
import { common } from '../src';

describe('test common', () => {
  test('debounce', async () => {
    let num = 1;
    const debounce = common.debounce(() => {
      return num += 1;
    }, 100, {
      immediate: true
    });
    debounce();
    expect(num).toBe(2);
    debounce();
    await common.wait(100);
    expect(num).toBe(3);
  });
});
