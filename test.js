'use strict';
function testCl(par){
   var mtxt = "sdsd";
   return function (d){
        var tottx= par+mtxt+d;
        mtxt = tottx;
        return tottx;
   }  
}

var f1 = testCl("f1");
console.log(f1("WWW"));
console.log(f1("WWW"));
var f2 = testCl("f2");
console.log(f2("FFF"));
//var pattern = /orange/;
//var pattern = /[^ge]/;
var pattern = /[^ge]/;
console.log(pattern.test('e')); //false
console.log(pattern.test('d')); //true
//console.log('pattern.test=',pattern.test("orange"));
var strToMatch = 'A Toyota! Race fast, safe car! A toyota!';
var regExAt = /toyo?ta{1,}/ig;
var arrMatches = regExAt.exec(strToMatch);
console.log(arrMatches);
function myT(cd){
    cd();
}

myT(()=>console.log(message));
var message = "calback completed";

var strToMatch = 'wooden bat, smelly Cat,a fat cat';
var re = /[^]at/gi;
var arrMatches = strToMatch.match(re);
//var arrMatches = re.exec(strToMatch);

console.log(arrMatches);

var heartyLaugh = /(Ha){3,}/i;
console.log(heartyLaugh.test("HaHaHaaaa"));

function Pltest(){
    this.ets2 = function (){
        return this;
    }
   var cthis = this; 
   let t4 =  function (){ console.log(cthis);}
   this.t4public = function () {  t4();}
}
var plt3 = {
    name : "pt3",
    etst : function (){
        return this;
    }

}
Pltest.prototype.etst = function () {return this.t4public();}
var plt1 = Pltest();
console.log(' plt1=', plt1);
var plt2 = new Pltest();
console.log(' plt2=', plt2.etst(plt2));
console.log(' plt2.ets2=', plt2.ets2());
console.log(' plt2.t4=');
plt2.t4public();
console.log(' plt3=', plt3.etst());
