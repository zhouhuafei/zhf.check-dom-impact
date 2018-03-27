const offset = require('zhf.offset');
const getDomArray = require('zhf.get-dom-array');

// 检测dom碰撞
function checkDomImpact(element1, element2) {
    const dom1 = getDomArray(element1);
    const dom2 = getDomArray(element2);
    const isMoreLeft = offset(dom1).left > offset(dom2).left + dom2.offsetWidth;
    const isLessRight = offset(dom1).left + dom1.offsetWidth < offset(dom2).left;
    const isMoreTop = offset(dom1).top > offset(dom2).top + dom2.offsetHeight;
    const isLessBottom = offset(dom1).top + dom2.offsetHeight < offset(dom2).top;
    return !(isMoreLeft || isLessRight || isMoreTop || isLessBottom);
}

module.exports = checkDomImpact;
