// js set 
// set is a method which can hold unique value and can't hold same value
// set can not take any duplicate data
// set creat with new set() function and it will support array and Object

let myset = new Set([1,2,3,4]);
myset.add('hello')
myset.add(2,3)  // it can not find in myset varriable cz it already having. duplicate value not allow;
myset.delete(2); // 2 delete from myset variables.
// myset.clear()  ...... everything is clear . and there is nothing in this set
console.log(myset.has(1)); // checking a value which is has in myset. it will return boolean value.
console.log(myset);

// we can access set function using loop 
for(x of myset){
    console.log(x)
};

// myset has an *entries() function* is like iterator. entries returns us key, value pairs
let num = new Set([1,2,3,4,5,6,7,8,9]);
let iterator = num.entries();
console.log(iterator)
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())