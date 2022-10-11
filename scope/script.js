// javascript scoping
//  ES6 features - scoping
// scoping has 3 types of variable declearation and they are 1. var 2. let 3. const
// difference between var let and constant.

// var
var a = 10;
a= 20 ;
a = a+10;
console.log(a)
//  var is a re assignable


// let (es6 features)
let b = 'amar sonar bangla' ;
b = 'ami tomay valobashi'
console.log(b);
// let b = 5;    // error. b has already decleared!
// let is re asignable but not re declearable



// const
const c = 54;
// c = 20;
// const c = 20;
console.log(c);
// const can't suppor re assignable and re declearable

/**
 * all about scoping
 * there are three types of scoping and they are Local Scope, global scope and function scope.
 */


// global scope 
var d = 1;
let e = 2;
const f = 3;
console.log(`global scope :`, d, e , f);


// function scope
function testCode(){
    var d = 4;
    let e = 5;
    const f = 6;
    console.log(`function scope is :`, d, e, f)
};
testCode();

console.log(`global scope :`, d, e , f);
