import Calculator from "./calculator";

describe('Calulator: no starting value', () => {
  let calc
  beforeEach(() => {
    calc = new Calculator();
  })

  it('returns a value', () => {
    expect(calc.total).toEqual(0);
  })

  it('can perform addition', () => {
    calc.plus(3)
    expect(calc.total).toEqual(3);
    calc.plus(7)
    expect(calc.total).toEqual(10);
    calc.plus(3)
    expect(calc.total).toEqual(13);
  })

  it('can perform subtraction', () => {
    calc.minus(1)
    expect(calc.total).toEqual(-1);
    calc.minus(2)
    expect(calc.total).toEqual(-3);
    calc.minus(3)
    expect(calc.total).toEqual(-6);
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
