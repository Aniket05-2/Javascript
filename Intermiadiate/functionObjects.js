function calculateCartPrice(...num1){
    return num1

}

console.log(calculateCartPrice(2,400,400))


function calculateCartPric(value1,value2,...num1){
    return num1

}

console.log(calculateCartPric(2,400,400,2000))
const user={
    username:"hitesh",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject({
    username:"Sam",
    price:399
})