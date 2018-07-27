'use strict';
function testUtils(){}

testUtils.prototype.captitalizeWord = function (word){
   if ( typeof word =='string')
    return word.toUpperCase()
    else return false;
}

module.exports = testUtils;