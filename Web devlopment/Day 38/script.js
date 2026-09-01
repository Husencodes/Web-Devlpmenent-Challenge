// async function getdata(){
//     setTimeout(()=>{
//         console.log("This async function")
//     },3000)
// }

// let output = getdata();


//Fetch API

// async function getdata() {
//     // let response= await fetch('https://jsonplaceholder.typicode.com/todos/2')
//     let response= await fetch('https:jsonplaceholder.typicode.com/comments')
//     let data=response.json;
//     console.log(response)

// }

// getdata();

async function getData() {
   
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
    let data = await x.json() 
    return data
}

async function main(){
    console.log("Loading modules")

    console.log("Do something else")

    console.log("Load data")

    let data = await getData()

    console.log(data)

    console.log("process data")

    console.log("task 2")

}

main()
