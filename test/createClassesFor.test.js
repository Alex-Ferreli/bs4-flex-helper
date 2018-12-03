const createClassesFor = require('../createClassesFor').default;

test('with single value', () => {
  expect(createClassesFor('flex', 'row')).toBe('flex-row');
});

test('with array value', () => {
  expect(createClassesFor('flex', ['row', 'column'])).toBe('flex-row flex-sm-column');
});
