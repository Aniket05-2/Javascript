// const coding=["js","ruby","java","python","c"]
// coding.forEach(element => {
//     console.log(element)
    
// });


//It is not return 
const myNums=[1,2,3,4,5,6,7,8,9]
 const newNums=myNums.filter((num)=> num >5)
console.log(newNums)


const newNums2=myNums.filter((num)=>{return num <5} )
console.log(newNums2)

//let userBooks=books.filter((bk)=>{return bk.publish >=2000 })

const myNumbers=[1,2,3,4,5,6,7,8,9]
let numss=myNumbers.map((nums)=>nums+10)
console.log(numss)

const newNum=myNumbers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>50)
console.log(newNum)


//Reduce

let initialValue=0;
const sum=myNumbers.reduce((accumulator,currentValue)=> accumulator+currentValue,initialValue)
console.log(sum)

const shoppingCart=[
    {
        itemName:"jsCourse",
        price:999
    },
    {
        itemName:"js",
        price:1000
        
    },
    {
        itemName:"javav",
        price:100
        
    }

]

const total=shoppingCart.reduce((acc,cur)=>{
    return cur.price+acc
},0)

console.log(total)