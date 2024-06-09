function addTwoNumber(num1,num2){//parameters
    let res=num1+num2
    return res
}





const res=addTwoNumber(8,98)//arguments

console.log(res)


function loginUser(username){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`


}
console.log(loginUser("Aniket"))



//if the arguments are not sent then then undefined but not null
