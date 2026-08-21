//functions

function greet(day){
    console.log("Hello" + day);
}

greet(" This is Day 27");

function intro(name){
    console.log("Hey iam " + name);
}

intro("Husen");

//function that returns value

function add(a,b){
   return a+b;
}

let result = add(25,25);//function call

console.log(result);//printing output


//printing square number

function square(a){
    return a*a;
}

let results = square(5);
console.log(results);

//checking even or odd


function check(n){
    if(n%2==0){
        console.log("The number is even");
    }

    else
        console.log("The number is odd");
}

check(7);