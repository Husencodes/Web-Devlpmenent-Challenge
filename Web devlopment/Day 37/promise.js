console.log("Day 37 learning Promises")

let promo1 = new Promise((resolve, reject)=>{
    let a=Math.random();
    if(a<=0.5){
        console.log("Something went wrong")
    }
    else{
        console.log("Signup successful")
    }

    setTimeout(()=>{
        console.log("Complited")
    },3000)
});

promo1.then((a)=>{
    console.log(a)
})


//Promise chaining


// const promise = new Promise((resolve, reject) => {
//     resolve(10);
// });

// promise
//     .then((value) => {
//         console.log(value);
//         return value * 2;
//     })
//     .then((value) => {
//         console.log(value);
//         return value + 5;
//     })
//     .then((value) => {
//         console.log(value);
//     });