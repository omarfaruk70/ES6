// Iterator
let str = 'Hello world';
str = [3,6,5,5,1,6]//
// Symbol.iterator
let result = str[Symbol.iterator]();
console.log(result.next()); 
console.log(result.next()); 
console.log(result.next()); 
console.log(result.next()); 
console.log(result.next()); 
console.log(result.next()); 
console.log(result.next()); 
console.log(result.next()); 
console.log(result.next()); 
console.log(result.next()); 
console.log(result.next()); 
console.log(result.next().value); 






// creating a custom iterator using symbol features
const members = ['rahim', 'karim', 'saddam', 'mamun'];

function customIterator(param){
    let i = 0;

    return {
        next: function(){
            return i < param.length ? {value: param[i++], done: false} : {done: true};
        }
    };
};

let output = customIterator(members);
console.log(output.next());
console.log(output.next());
console.log(output.next());
console.log(output.next());
console.log(output.next());
console.log(output.next());