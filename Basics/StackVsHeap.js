/*Stack is used in primitive datatypes and heap in non primitives 
*/
let myYoutubename="anikket"
let anothername=myYoutubename
anothername="chai"
console.log(anothername)
//chai

console.log(myYoutubename)
//anikket




let userOne={
    email:"üser@google.com",
    age:20
}
userTwo=userOne

userTwo.age=34

console.log(userOne)
console.log(userTwo)


//here the copy is not passed the referenece itsxelf is passed and the changes made will apply to all object 