// spread operator (...) with function parameter
// spread means choriye deya .
let numbers = [1,2,3,4,5,6,7,8];
let copy = [...numbers];
numbers.push(9);
// console.log(numbers)
console.log(copy);


let country = 'BanglaDesh';
let spread = [...country];
console.log(spread);


let fruits  = ['apple', 'banana', 'guava'];
let drinks = ['pepsi', '7up', 'cocacola'];
let favs = ['Biriyani', 'kacchi'];
let all = [...fruits, ...drinks, ...favs];
console.log(all);

/**
 * spread operator with function parameter
 */

const nums = [32,11,544,5,65,56,65,65,8,98,6,132,];
let bigNum = Math.max(...nums);
console.log(bigNum);


let person = ['Rahim', 'Karim'];
let test = (firstFriend, lastFriend) =>{
    console.log(`hello ${firstFriend}! how are you ${lastFriend} ?`)
};
// test(person[0], person[1]);
test(...person);
