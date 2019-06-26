const stepScale = require('./bundle')

test('stepScale', () => {
  expect(stepScale(1, 3, 3)).toEqual([1, 2, 3])
  expect(stepScale(1, 10, 3)).toEqual([1, 5.5, 10])
})