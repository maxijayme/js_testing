const { sum, multiply, devide } = require('./02-maths');

test('adds 1 + 2 to equal 3', () => {
  const rta = sum(1, 2);
  expect(rta).toBe(3);
});

test('multiply 2 *3 to equal 6', () => {
  const rta = multiply(2, 3);
  expect(rta).toBe(6);
});

test('devide 9 /3 to equals 3', () => {
  const rta = devide(9, 3);
  expect(rta).toBe(3);
});
