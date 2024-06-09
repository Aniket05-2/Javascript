const name="äniket"
const repoCount=50

console.log(name+repoCount+"Value");


console.log(`Hello my name is ${name} and the repository count is ${repoCount}`)

const gameName=new String('aniket')  //object 
console.log(gameName)

console.log(typeof gameName)  //object   //key-value pairs
console.log(typeof name) //string

//Properties

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('t'))
const newString=gameName.substring(0,4)
console.log(newString)

const anotherString=gameName.slice(-8,4)
console.log(anotherString)




const newStringOne="     anikt     ";
console.log(newStringOne)
console.log(newStringOne.trim())  //trimStart  //trimEnd
a=newStringOne.trim()
console.log(newStringOne.length)
console.log(a.length)



const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))

const n="ani-ganesh-pai"
const words=n.split('-')
console.log(words[0])


  



 