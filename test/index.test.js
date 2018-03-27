const checkDomImpact = require('../dist/index.min');

test(`检测两个dom是否碰撞了`, () => {
    expect(checkDomImpact('html', 'body')).toEqual(true);
});
