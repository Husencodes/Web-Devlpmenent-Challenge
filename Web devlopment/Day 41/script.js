console.log("Day 41 Rivisoning the DOMs Concepts");

let a=document.querySelector('#para')

console.log(a)

// let b=document.getElementsByClassName('Header')
let b=document.querySelector('.Header')
console.log(b)

let c=document.getElementsByTagName('h2')
console.log(c)
c.innerHTML = "<b>Hello</b>";
console.log(c)

let d=document.querySelector('h1')
d.style.backgroundColor="red";

//Changing Attributes

// <img id="photo" src="old.jpg"/>

// let img=document.querySelector('#photo')
// img.setAttribute("src","new.jpg")


//creating element


let para=document.createElement('paragraph')
para.textContent="Hello"

document.body.appendChild(para)

// eventlistener
let button=document.querySelector("#btn")
button.addEventListener("click", ()=>{
console.log("Thanks for visiting")
    
});