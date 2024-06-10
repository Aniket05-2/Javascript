const temperature=30

if(temperature===30)
    {
        console.log("Temperature less than 50")


    }
    else{
        console.log("greter than 40")
    }




const bal=1000
if(bal >500) console.log("test")

const userLoggedIn=true
const debitCard=true
if(userLoggedIn && debitCard)
    {
        console.log("Ällowed" );
    }


    const i=3

    switch(i){
        case 1:
            console.log("One")
            break;

        case 3:
            console.log("three")
            break;
    }




 /*   falsy value
   false,0,-0,BigInt 0n,"",null,undefined,NaN


   truly value

   "0",'false'," ",[ ],{},function(){}

   */


   const ary=[]
   if(ary.length===0)
    {
        console.log("Ärray is Empty")
    }
    const emptyObj={}

    if(Object.keys(emptyObj).length===0)
        {
            console.log("Öbject is Empty")
        }




/* Nullisg Coalescing Operator (??):null undefined*/
let val1;
val1=5??10  //5
val2=null??10 //10
val1=null??10??15 //10


//Ternary Operator

//conditon ?true :false

const a=10;
a>10? console.log("valuehh"):console.log(Ëqual)

