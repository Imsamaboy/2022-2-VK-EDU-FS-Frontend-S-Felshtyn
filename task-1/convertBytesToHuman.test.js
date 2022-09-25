/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman(-100)).toBe(false)
  expect(convertBytesToHuman("1024")).toBe(false)
  expect(convertBytesToHuman([1, "2"])).toBe(false)
  expect(convertBytesToHuman(true)).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(1024)).toBe("1 KB")
  expect(convertBytesToHuman(123123123)).toBe("117.42 MB")
  expect(convertBytesToHuman(1249124)).toBe("1.19 MB")
  expect(convertBytesToHuman(12312455892)).toBe("11.47 GB")
  expect(convertBytesToHuman(0)).toBe("0 Bytes")
});