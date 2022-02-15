import Calculator from "./calculator";

describe('Calulator: no starting value', () => {
  let calc
  beforeEach(() => {
    calc = new Calculator();
  })

    it('returns a value', () => {
      expect(calc.total).toEqual(0);
    })
});

describe('Calulator: starting value 99', () => {
    const calc = new Calculator(99);
    expect(calc.total).toEqual(99);
});
