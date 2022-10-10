// object distructing
let person = {
    fname : 'Omar Faruk',
    lname: 'Faruk',
    dob: '07-11-2002',
    phone: '01881937170'
};
// old way
// let fname = person = person.fname;
// let lname = person.lname;
// let phone = person.phone;
// console.log(fname, lname, phone)


// es6 way
let {fname, lname, phone} = person;
console.log(fname, lname, phone);