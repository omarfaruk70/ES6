// rest operator (...)
// spread operator and rest operator  sign is also similar (...).
// spread operator jeikono kichuke alada alada korar kajee use kora hoy 
// and rest operator jei kono kichuke eksathe korar kaje use kora hoy
let fruits = ['apple', 'mango', 'litchi', 'Jack-fruit'];
let {first, second, ...third} = fruits;
console.log(third) 

// rest operator in a object
let person = {
    firstName : 'Omar',
    lastName : 'Faruk',
    job : 'student',
    gender: 'male'
};
let {firstName, ...lastName} = person;
console.log(lastName);

// rest operator in a function
let test = (name, ...num) =>{
    console.log(name)
    console.log(num)
}
test('Adam smith', 60,55,44,88)