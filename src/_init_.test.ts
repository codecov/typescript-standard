import Init from "./_init_";

describe('init', () => {
    test('fully covered', () => {
        const indexObj = new Init();
        expect(indexObj.fully_covered()).toEqual(true);
    });
})