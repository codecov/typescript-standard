import Index from "./index";

test('test uncovered if true', () => {
    const indexObj = new Index();
    expect(indexObj.uncovered_if()).toEqual(false);
});

test('test uncovered if false', () => {
    const indexObj = new Index();
    expect(indexObj.uncovered_if(false)).toEqual(true);
});

test('fully covered', () => {
    const indexObj = new Index();
    expect(indexObj.fully_covered()).toEqual(true);
});

test('all covered', () => {
    const indexObj = new Index()
    expect(indexObj.uncovered()).toEqual(true)
})
