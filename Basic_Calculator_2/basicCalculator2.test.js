const solve = require('./basicCalculator2');

describe('Basic Calculator 2', () => {
  it('should solve example 1', () => {
    expect(solve("3+2*2")).toBe(7);
  });
  it('should solve example 2', () => {
    expect(solve(" 3/2 ")).toBe(1);
  });
  it('should solve example 3', () => {
    expect(solve("3+5/2")).toBe(5);
  });
  it('should solve example 3', () => {
    expect(solve("42")).toBe(42);
  });
});
