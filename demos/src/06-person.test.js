const Person = require('./06-person');

describe('Test person IMC', () => {
  let person;
  beforeAll(() => {
    person = new Person('Maxi', 70, 1.78);
  });
  test('down imc', () => {
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });
  test('normal imc', () => {
    person.weight = 70;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
