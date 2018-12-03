const bs4FlexHelper = require('../index').default;

test('with single value', () => {
  expect(bs4FlexHelper({ dir: 'row' })).toBe('d-flex flex-row');
});

test('with array value', () => {
  expect(bs4FlexHelper({ dir: ['row', 'column'] })).toBe('d-flex flex-row flex-sm-column');
});

test('without base class', () => {
  expect(bs4FlexHelper({ dir: 'row' }, false)).toBe('flex-row');
});

test('inline flex', () => {
  expect(bs4FlexHelper({ dir: 'row', inline: true })).toBe('d-inline-flex flex-row');
});
