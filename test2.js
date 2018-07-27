'use strict';
function MainParent() {
    this.name='';
    this.dp='none';
    this.sl=0.0;

}

function FrstCh(){
    MainParent.call(this);
    this.tt=[];
}

function ScndCh(){
  FrstCh.call(this);
  this.sup= function(){return 'sff';}  
}

//FrstCh.prototype= new MainParent();
FrstCh.prototype=Object.create(MainParent.prototype);;
FrstCh.prototype.tpr = function () {return 'ss'};
ScndCh.prototype=Object.create(FrstCh.prototype);
var fo = new FrstCh();
fo.tpr=FrstCh.prototype.tpr;
var so= new ScndCh();
console.log(fo instanceof FrstCh);
console.log(fo instanceof MainParent);
console.log(so instanceof FrstCh);
console.log(so instanceof MainParent);
console.log(so instanceof ScndCh);

console.log('fo=',fo);
console.log('so=',so.__proto__);
var dv = null;

function engageGear(gear){
    if(gear==="R"){ console.log ("Reversing"); dv="Reverse"; return;}
    if(gear==="D"){ console.log ("Driving"); dv="Drive";return;}
    if(gear==="N"){ console.log ("Neutral/Parking"); dv="Parking"; return;}
    dv="error!";
    throw new Error("Invalid Gear State");
    }
    try
    {
    engageGear("R"); //Reversing
    engageGear("P"); //Invalid Gear State
    }
    catch(e){
        console.log(e.message);
        }


   function print(...b){
       console.log(b);
   }     

   print(1,2,3,4,5);

   function ff(){
       return [5,4,3,2,1];
   }
 
   function ff2(){
    return {a:5,b:4,c:3};
}

   var {a,b,c} = ff2();
   console.log(a,b,c);

   var Obbb={
       firstm(){},
       secstm(){}
       
   }

 console.log(`a=${a} 
 and b=${b} a+b=${a+b}`);

function sparams(s, ...v){
 console.log(s,v); 
}
sparams`tesdf sdf ${a} sdfdsv ${b} vzxscccc ${c}`;
let m = new Map([['third',c], ['fourth',4]]);
m.set('first', a);
m.set('second', b);
//m.set(['third',c], ['fourth',4]);
console.log('map get',m.get('second'));
console.log('map has',m.has('third'));
console.log('map =',m);

var tstCl = function () {
  this.construct = () => {
        console.log('init complete');
    }
 
  this.construct();
    
}


tstCl.prototype = {
    frstmm() {
        console.log('frstmm complete');
    },

    scnd() {
        console.log('scnd complete');
    },
 
}


 var ttoo =  new tstCl();
 
 ttoo.frstmm();
 ttoo.scnd(); 

 var wmp = new WeakMap();
 let wmpk1={v:1};
 wmp.set(wmpk1,'ddd');
 console.log('k1=',wmp.get(wmpk1));
let tarr=[4,5,6,7,82,4,2];
let itt=tarr[Symbol.iterator]();
/*for (let i=0; i<tarr.length; i++){
    console.log(itt.next());
}*/
for (let val in tarr){
    console.log(val);
}

function ob(){
    this.v1=3;
    this.v4=5;
}
var o1 = new ob();
var o2 = o1;
var o3 = Object.assign({}, o1);
o1.v1=6 ;
console.log(o1);
console.log(o2);
console.log(o3);

var s1 = new String('3434');
var s2 = s1;
s1+='sss';
console.log(s2);

let af = (...f) => console.log(f);
af(0,...[1,2,3,4,5,6]);

function CustomStr(str){
    this.str = str;
  /*  this.add = function (s) {
        'use strict';
        return this.str + a;
    }*/
    };

    CustomStr.prototype.add=function (s) {
        'use strict';
        var th=this.str+' '+s;
        return function() { return th; }
    }

 var customStr = new CustomStr("Hello");
 console.log(customStr.add(["World"])());

const fs = require('fs');
var log = fs.readFile("./test.js",_=>console.log('read done!'));
console.log("2");
var http = require('http');
var server = http.createServer();
server.on('request', function (req, res) {
res.writeHead(200, {'Content-Type': 'html'});
res.end('<html><body><h1>Hello Node!</h1></body></<html>');
});
//server.listen(3000);
//setTimeout(()=>{console.log('timeout is gone')}, 2000);
//var cnt = 0;
//let st = setInterval(()=>{cnt++; if(cnt <5) console.log('tick#'+cnt); 
//else {clearInterval(st); console.log('done')} }, 1000);

var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('added',(id)=>{console.log('joined id = '+id);});
emitter.on('removed', (id)=>{console.log(id+' get away');});
emitter.emit('added','testuser');
setTimeout(_=>emitter.emit('removed','testuser'), 2500);
var mm = require('./mymodules/myfrstmd');
mm.mdfirst();
mm.mdsecond();