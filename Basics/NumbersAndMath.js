const score=400
const balance=new Number(100)
console.log(balance)//100
console.log(balance.toString().length)//3
console.log(balance.toFixed(2))  //100.00



const otherNum=23.8966
console.log(otherNum.toPrecision(3))  //23.9


const hund=100000
console.log(hund.toLocaleString('en-IN'))//1,00,000

//------------------------------Maths------------------------------------------------------

console.log(Math)
console.log(Math.abs(-4))  //4
console.log(Math.round(4.6))//5
console.log(Math.ceil(4.2))//5
console.log(Math.floor(4.9))//4
console.log(Math.min(4,5,3,6))
console.log(Math.max(3,4,5,6))
console.log((Math.random()*10)+1)

const min=10
const max=20

console.log(Math.floor(Math.random()* (max-min +1) )+min)

