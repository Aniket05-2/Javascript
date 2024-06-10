const user={
    username:"Hitesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},Welcome to Website`)   //Current Context
        console.log(this)
    }
}




user.welcomeMessage()
user.username="Sam"
user.welcomeMessage()





function thisMethod()
{
    console.log(this)    //Cannnot Use this in Function
}



const chai=(num1,num2)=>{
    return num1+num2;
    
}
console.log(chai(3,4))






//Implict return

const addTwo=(num1,num2)=>(num1+num2)


//{ } used then use return
//() then no need of return






