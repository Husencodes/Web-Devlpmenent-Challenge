console.log("Today we are learning loops in js");

// for loop

let a=1;
let b=2;

// for (let i = 0;i <100;i++) {
//     console.log(a+i);
    
// }

// for(let i=0;i<50;i++){
//     console.log(b+i)
// }

// for in loop

let obj ={
    name:"Husen",
    id:9353,
    Company:"Google",
    Role:"AI Enginer",
}

for (const key in obj) {
 console.log(key, ":", obj[key]);
    
}


// for of

// ex1
let name1 ="Husen";
for (const character of name1) {
    console.log(character);
}

// ex2

let items =["TV","Charger","Phone"];

// console.log(items[0]);
// console.log(items[1]);
// console.log(items[2]);

for(let item of items){
    console.log(item);
}

// while loop

let password = "";

while (password !== "1234") {
    console.log("keep asking Password")
     break;
}

// do-while loop
let j=5
do{
    console.log("this do while loop");
   
    break;
}while(j<=5)
    