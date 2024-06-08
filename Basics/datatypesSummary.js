//Primitive
//7 types :String,Number,Boolean,null,undefined,Symbol
//BigInt


//ReferenceType(Non Primitive)

//Array,Objects,Functions


//Javascript is dynamically typed language to offer greater flexibility in handling data.

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);






const heroes=["shaktiman","nagraj"]

let myObj={
    name:"hitesh",
    age:23
}
const myFunction=function(){
    console.log("Hello World!")
}

let a=null
console.log(typeof a)

//The typeof null is object

console.log(typeof (myFunction))