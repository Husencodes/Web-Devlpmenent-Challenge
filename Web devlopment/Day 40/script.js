async function Day() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        resolve(7)
        },1000);
    })
}

(function main(){
    let a=Day()
    console.log(a)
})()


let [x,y,...rest]=[25,56,8,6,9,3]
console.log(x,y,rest)


//Hosting concept 

// console.log(a2)
//  const a2="Hello"

