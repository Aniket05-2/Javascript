//singleton :the object created using constructor
//Object.create


//  llook declaring symbol in object
const mySym=Symbol("Key1")
const JsUser = {
    name: "Hitesh",
    age:18,
    [mySym]:"mySymbol", //symbol
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

//Changes to the Object.prototype object are seen by all objects through prototype chaining, unless the properties and methods subject to those changes are overridden further along the prototype chain. This provides a very powerful although potentially dangerous mechanism to override or extend object behavior. To make it more secure, Object.prototype is the only object in the core JavaScript language that has immutable prototype — the prototype of Object.prototype is always null and not changeable.

console.log(JsUser["email"])
console.log(JsUser.email)
console.log(JsUser[mySym])
console.log(typeof JsUser[mySym])


JsUser.email="hitesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email="hitesh@microsoft.com"
console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello JsUser")
}

JsUser.greetingTwo=function(){
    console.log(`Hello JsUser, ${this.name}`)
}



console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())




