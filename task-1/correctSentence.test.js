import correctSentence from './correctSentence';

test('returns correct sentence', () => {
  expect(correctSentence("greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends.")).toBe("Greetings, friends.")
  expect(correctSentence("")).toBe(".")
  expect(correctSentence(".")).toBe(".")
  expect(correctSentence(",")).toBe(",.")
  expect(correctSentence("привет")).toBe("Привет.")
  expect(correctSentence("вк - VK")).toBe("Вк - VK.")
  expect(correctSentence("123")).toBe("123.")
  expect(correctSentence(123)).toBe(123)
})
