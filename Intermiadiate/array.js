const marvel=["thor","IronMan","spiderman"
]

const dc=["superman","flash","batman"]

//marvel.push(dc)
console.log(marvel)   //array under array



const mar=marvel.concat(dc)   //returns a new array
console.log(mar)

//spread operator
const all_heroes=[...marvel,...dc]

console.log(all_heroes)

const another_array=[1,2,[3,4,[5,6,[7,8]]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)




//
console.log(Array.isArray([1,2,4]))
console.log(Array.from("äniket"))


let a=100
let b=200
let c=300
console.log(Array.of(a,b,c))