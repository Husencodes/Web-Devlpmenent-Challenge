//Today is Day 28 Learning "Strings"

let name="Husen"
let friend_name="Preetam";
let course="BCA";
let college="SVK";
let Full_name="Husenbasharasulsab"
let first_name="Husen"
let last_name="bash"
let friends="Preetam"
// console.log("Husen");//this is string

// accessing each character

console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name[4])

// finding string length

console.log(name.length);

//templete litrals

console.log(`His name is  ${name} and friend name is ${friend_name}`);
console.log(`my college name is ${college} and Course name is ${course}`);

// escape sequencw

// \n = new linw
// \t = tab
// etc

console.log(name.toUpperCase())// making upper case the string
console.log(friend_name.toUpperCase())


console.log(course.toLowerCase());//making lower case the string
// console.log(Full_name.length)
console.log(Full_name.slice(0,5))

console.log(Full_name.replace("basharasulsab","RB"));//replacing the characters

console.log(first_name.concat(last_name))//concat=adding two or more strings

console.log(friends.concat(name, "pradee ", "basu ", "vikram "));


//Thankyou for visiting