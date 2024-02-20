// // // 1. Create a promise. Have it resolve with a value of `Promise Resolved!` in resolve after a delay of 1000ms, using `setTimeout`. Print the contents of the promise after it has been resolved by passing `console.log` to `.then`

let prom1=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise have been resolved");
    },1000);
}).then((data)=>{
    console.log(data);
})
// // // 2. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch`
let prom2=new Promise((resolve, reject) => {
  
    reject("Rejected Promise");
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});
// // 3. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch` and also use `.finally` to log message `Promise Settled!`.
let prom3=new Promise((resolve, reject) => {
    reject("Rejected Promise");
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("Promise Settled");
})
// // 4. What will be the output of the code below.

// // ```js
// // console.log('A');

// // // Asynchronous code finises in 0 seconds (Callback Queue)
// // setTimeout(() => console.log('B'), 0); // callback queue

// // // A promise that resolves right away (Microtask Queue)
// // Promise.resolve().then(() => console.log('C'));

// // console.log('D');

A 
D
C
B
 // ```
// // 5. Write a function named `wait` that accepts `time` in ms returns a promise. The promise gets resolved after given time.
function wait(time) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Promise resolved!!");
        },time)
    })
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}
wait(2000);
// 6. Do the following:

// - Create a new promise
// - Resolve with 21
// - Use `.then` and return adding `10` to the value you will get as parameter
// - Use `.then` and return adding `100` to the value you will get as parameter
// - Use `.then` and check if the value you get is greater than `100` throw new error with any message
// - Catch the error using `.catch`

new Promise((resolve, reject) => {
    resolve(21);
    
}).then((data)=>{
    // console.log( data+10);
    return data+10;
    
}).then((data)=>{
// console.log( data+100);
return data+100;
    
}).then((data)=>{
    if(data>100){
        throw new Error("Promise Rejected!");
    }
}).catch((err)=>{
console.log(err);
});

// 7. Do the following:

// - Create a new promise
// - Resolve the promise with `['A']`
// - Use `.then` and concat `B` into the parameter and return
// - Use `.then` and return and object like `{0: 'A', 1: 'B'}`
// - Use `.then` and log the value

new Promise((resolve, reject) => {
    resolve(['A']);
})
.then((data)=>{
    return data.concat('B');
})
.then((data)=>{
    let obj={};
    data.forEach((element,index)=>{
        obj[index]=element;
    });
    return obj;
}).then((data)=>{
    console.log(data);
})


// 8. Do the following:

// - Create a new promise named `first` and resolve it with `1`
// - Use `.then` on `first` and return `2` also check the value you get access to by logging
// - Chain `.then` on above and return `3` also check the value you get access to by logging
// - Chain `.then` on above and return `4` also check the value you get access to by logging


let first=new Promise((resolve, reject) => {
    resolve(1);
}).then((data)=>{
    console.log(data+1);
    return data+1;
    
}).then((data)=>{
    console.log(data+1);
    return data+1
}).then((data)=>{
    console.log(data+1)
    return data;
})



// 9. Do the following:

// - Create a new promise named `first` and resolve it with `1`
// - Use `.then` on `first` and return `2` also check the value you get access to by logging
// - Use `.then` on `first` and return `3` also check the value you get access to by logging
// - Use `.then` on `first` and return `4` also check the value you get access to by logging


let first = new Promise((resolve, reject) => {
    resolve(1);
});

first.then((data) => {
    console.log(data); 
    console.log(data + 1); 
});

first.then((data) => {
    console.log(data); 
    console.log(data + 2); 
});

first.then((data) => {
    console.log(data); 
    console.log(data + 3); 
});


// 10. Try to understand the difference between the problem 8 and 9. Write your observation.
```
In problem 8 we can are attaching .then in the promise directly .But in 9 problem we are attaching .then in first where the promise is stored which means we are not directly acting on the promise itself.
```


// - Create a promise and resolve it with `John`
// - Use `.then` and return another promise that resolves with `Arya`
// - Use `.then` log the value you get access to and return another promise that resolves after 2000ms with value `Bran`
// - Use `.then` to log the value

 new Promise((resolve, reject) => {
    resolve('John');
})
.then((data) => {
    console.log(data); 
    return new Promise((resolve, reject) => {
        resolve('Arya');
    });
}).then((data) => {
    console.log(data); 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Bran');
        }, 2000);
    });
}).then((data) => {
    console.log(data); 
});


