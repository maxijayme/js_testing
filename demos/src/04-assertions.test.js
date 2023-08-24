/* eslint-disable no-trailing-spaces */
test('test object', () => {
  const data = { name: 'Maxi' };
  data.lastname = 'Jayme';
  expect(data).toEqual({ name: 'Maxi', lastname: 'Jayme' });
  expect(data).toBeDefined();
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
  expect(1).toBeTruthy();
});

test('array', () => {
  const newArray = [1, 2, 3];
  expect(newArray).toContain(3);
})

test('string', () => {
  const word = 'pepe';
  expect(word).toMatch(/ep/);
});
