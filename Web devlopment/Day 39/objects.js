// let obj={
// name:"Husen",
// Course:"BCA",
// College:"SVK"
// }

// console.log(obj)

// let animal={
//     eat:true
// }

// let cat={
//     sound:"meow"
// }

// cat.__proto__=animal; //inherting animal using prototype


// creting object using class


class animal{
    constructor(name){
        this.name=name
        console.log("Object is created ")
    }

    eats(){
        console.log("Eating.......")
    }

    sleep(){
        console.log("Sleepinggggggg")
    }
}

class lions extends animal{
  
    constructor(name){
          super(name)
    console.log("Hloooooooooooo")
    }
}

let a=new animal("tiger");
console.log(a)

let b=new animal("lion");
console.log(b)