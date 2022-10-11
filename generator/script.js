// Es 6 Generator 
// generator is like iterator. but generator creation structure is not same with iterator
function* generatorFunc(){
    yield 1;
    yield 'Maruf';
    yield 4;
    yield 'Kamrul';
    yield 'hello world';
};
let iterate = generatorFunc();
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next().value);
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());




