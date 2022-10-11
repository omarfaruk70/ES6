//  promises - es6 features
// promises has two params and they are resolve() and reject()
// Promise success = resolve()
// Promise fail = reject()

// finally .then() and .catch()
let newprom = new Promise((resolve, reject)=>{
    let sum = 51+21;
    if(sum == 7){
        resolve('Successfully executed')
    }
    else{
        reject('something went wrong');
    };

});


newprom.then((msg)=>{
    console.log('promise is' + msg)
}).catch((err)=>{
    console.log('opps! ' + err)
})