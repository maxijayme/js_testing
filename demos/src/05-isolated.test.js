/* eslint-disable no-console */
describe('group', () => {
  test('test1', () => {
    expect(1 + 1).toBe(2);
  });
  afterAll(() => {
    console.log('voy último...');
  });
  beforeEach(() => {
    console.log('siguiente...');
  });
  describe('sub-group', () => {
    test('test2', () => {
      expect(2 + 2).toBe(4);
    });
  });
  beforeAll(() => {
    console.log('permiso...');
  });
});
