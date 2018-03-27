'use strict';

var offset = require('zhf.offset');
var getDomArray = require('zhf.get-dom-array');

// 检测dom碰撞
function checkDomImpact(element1, element2) {
    var dom1 = getDomArray(element1);
    var dom2 = getDomArray(element2);
    var isMoreLeft = offset(dom1).left > offset(dom2).left + dom2.offsetWidth;
    var isLessRight = offset(dom1).left + dom1.offsetWidth < offset(dom2).left;
    var isMoreTop = offset(dom1).top > offset(dom2).top + dom2.offsetHeight;
    var isLessBottom = offset(dom1).top + dom2.offsetHeight < offset(dom2).top;
    return !(isMoreLeft || isLessRight || isMoreTop || isLessBottom);
}

module.exports = checkDomImpact;