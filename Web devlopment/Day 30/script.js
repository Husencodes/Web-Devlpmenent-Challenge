let arr=[1,2,3,5,8,9]
// index 0 1 2 3 4 5

console.log(arr);
console.log(arr[0]);


console.log(arr.length);//finding length

arr[0]=777;//arrays are mutable

//accessing using index
console.log(arr[2]);
console.log(arr[4]);
console.log(arr[5]);

arr[0]=777;//arrays are mutable

console.log(arr.toString()); //coverting arrays to string

console.log(arr.join(" and "));


/*also explored 
1.pop
2.push
3.shift
4.unshift
5.delete
6.sort
7.splice
*/


let c=[25,65,8,9,65];

c.forEach((arr, value,index )=>{
    console.log(arr,value,index)
})