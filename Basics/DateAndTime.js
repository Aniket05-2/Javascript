// Dates

let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)   //object


let myCreatedDate=new Date(2023,0,23)//moth starts from 0
console.log(myCreatedDate)

let myCreatedDateTime=new Date(2023,0,23,5,3)//moth starts from 0
console.log(myCreatedDateTime)




let myTimeStamp=Date.now()
console.log(myTimeStamp)  //in milliseconds

console.log(myCreatedDate.getTime())
  //milliseconds to seconds

  let dare=Date.now()
  console.log(Math.floor(dare/1000))




  //
let newDat=new Date()
console.log(newDat);
console.log(newDat.getDay())
console.log(newDat.getMonth()+1);
console.log(newDat.getDay());



newDat.toLocaleString('default',{
    weekday:"long",
    
})