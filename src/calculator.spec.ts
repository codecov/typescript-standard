import Calculator from "./calculator";

describe('Calulator: no starting value', () => {
  let calc
  beforeEach(() => {
    calc = new Calculator();
  })

  it('returns a value', () => {
    expect(calc.total).toEqual(0);
  })

  it('can perform an addition', () => {
    calc.plus(3)
    expect(calc.total).toEqual(3);
    calc.plus(7)
    expect(calc.total).toEqual(10);
    calc.plus(3)
    expect(calc.total).toEqual(13);
  })
});

describe('Calulator: starting value 99', () => {
  let calc
  beforeEach(() => {
    calc = new Calculator();
  })

  it('returns a value', () => {
    expect(calc.total).toEqual(0);
  })

  it('can zero out the internal value', () => {
    calc.c()
    expect(calc.total).toEqual(0);
  })
});
