//for of


const arr=[1,2,3,4,5]

for (const val of arr) {
    console.log(val)
    
}


const greeting="Hello World"
for(const greet of greeting)
    {
        console.log(greet)
    }



    //Map


    const map1 = new Map();

    map1.set("In","INDIA")
    map1.set("USA","United States of America")


    for (const [key1,value] of map1) {

        console.log(`Key is ${key1} and value is ${value}`)
    }


    //Object


    const myObj={
        "Game":"NFS",
        "GAME2":"Spiderman"
    }
    

//for of deos not workl in object






//fopr in


for (const key in myObj) {
    console.log(`${key} and value is ${myObj[key]}`)
        
    }


for (const key in arr) {
    
        console.log(arr[key])
    }


    for (const key in myObj) {
        console.log(myObj[key])
        
            
        }




    //map does not work in for in 

    const coding=["js","ruby","java","python","c"]

    coding.forEach(element => {
        console.log(element)
        
    });



    const myCoding=[
        {
            languageName:"javascript",
            languageFileName:"js"
        },
        {
            languageName:"java",
            languageFileName:"java"
        },
        {
            languageName:"python",
            languageFileName:"python"
        }
    ]

    myCoding.forEach((item)=>{
        console.log(item.languageFileName)
        console.log(item.languageName)

    })
    
    

