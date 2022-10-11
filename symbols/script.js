// symbols

// let a = Symbol();
// let b = Symbol();
// console.log(a, b);
// console.log(a == b);
// console.log(a === b);

let a = Symbol;
// symbol not count in obj property
let person = {
    name: 'Omar Faruk',
    job: 'Student',
    dob: '07-11-2002',
    [a] : 'Hello world'
}
console.log(person);
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person)); // successfully access the symbol
console.log(Object.keys(person)); 
