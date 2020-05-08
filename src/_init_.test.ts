import Init from "./_init_";

describe('init', () => {
    test('test uncovered if', () => {
        const indexObj = new Init();
        expect(indexObj.uncovered_if()).toEqual(false);
    });

    test('fully covered', () => {
        const indexObj = new Init();
        expect(indexObj.fully_covered()).toEqual(true);
    });
})