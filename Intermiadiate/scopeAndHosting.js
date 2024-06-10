function One(){
    const username="hitesh"

    function two(){
        const website="ÿoutube"
        console.log(username)
    }

 
    //two()
}
One()  //This funaction call doesnot call function two



//child can access parent elemnt

if(true)
    {
        const username="hitesh"
        if(username==="hitesh"){
            const website=" Youtube"
            console.log(username+website)
        }
        console.log(website)//cannot be accesed out of scope
    }
    console.log(username)//cannot access 



    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Hosting 

  addOne(4)   //works
    function addOne(value)
    {
        return value+1
    }
    



    addTwo(4)   //Does not Works
    const addTwo=function(num){
        return num+1
    }
    