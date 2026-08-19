

// if-else conditions

let age=20;

if(age>21){
    console.log("you can drive");
}

else if(age==20){
     console.log("Please learn how to drive a car");
}
else if(age==19){
    console.log("Please wait for next two years");
}

else{
    console.log("your not eligible");
}


// operators

// Arthmatic operator

let a=56;
let b=25;

console.log("Addition =",a+b);
console.log("Substraction =",a-b);
console.log("Multification =",a*b);
console.log("Modules =",a%b);
console.log("Expontial=",a**b);

// assignment operator

console.log(a+=b);

// compassion operators

let A=15;
let B=26;

if(A==B){
    console.log("Both are equal ");
}
else{
    console.log("Both are not equal ");
}

// ternary operator

let C=A>B ?true:false;
console.log(C);