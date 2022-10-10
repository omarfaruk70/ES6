// normal function
// function hello(){
//     console.log('Amar sonar bangla, ami tomay valobashi.')
// };
// hello();


// arrow function
let hello = (name) => console.log('cirodin tomar akash tomar batash amar prane bajay bashi.' + name);
hello('faruk');

let squareNum = number => number * number;   //return statement
console.log(squareNum(5));



// callback function
numbers = [1,9,1,2,3,6,5,8,6];
numbers.forEach(function(item){
    console.log(item)
})

let all = function(item){
console.log(item)
}
let allnum = item => console.log(item)
numbers.forEach(allnum);
// we can use map function instead of forEach function.