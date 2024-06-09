const tinderUser=new Object()

console.log(tinderUser)


tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

const regularUser={
    email:"some@gmail.com",
    fullname:{
        username:{
            firstname:"hitesh",
            lastname:"choudary"
        }
    }
    
}

console.log(regularUser.fullname?.username)


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3=Object.assign({},obj1,obj2)
console.log(obj3)

//spread Operator
const obj4={...obj1,...obj2}
console.log(obj4)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

console.log(Object.entries(tinderUser))


console.log(tinderUser.hasOwnProperty('name'))