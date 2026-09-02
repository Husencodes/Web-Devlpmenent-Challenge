let a= prompt("Enter first number")
let b= prompt ("Enter second number")

if(isNaN(a)||isNaN(b)){
    throw SyntaxError("This is not allowed");
}

let sum=parseInt(a)+parseInt(b);
function main(){
    
    try{
        
        console.log("The total sum =",sum);
        return true
    }catch{
        
        console.log("Error Name:", error.name);
        console.log("Error Message:", error.message);   
        return false
    }
     finally{
        console.log("This program is closing thankyou for visiting")
    
     }
}

let c= main()

console.log(c)