// Faulty calculator

let random=Math.random()

let a=Number(prompt ("Enter First number:-"))
let c=prompt("Enter Operator:-")
let b=Number(prompt("Enter second number:-"))

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if(random<0.1){
// performing correct operation
console.log(`The result is ${eval(` ${a} ${c} ${b}`)}`)
alert(`The result is ${eval(` ${a} ${c} ${b}`)}`)

}
else{
    //performing wrong operation
    c=obj[c]
    console.log(`The result is ${eval(` ${a} ${c} ${b}`)}`)
    alert(`The result is ${eval(` ${a} ${c} ${b}`)}`)
}
