// JAVASCRIPT EXECUTION CONTEXT  


/*

Global Execution Context -----> this

In browswe: window
in ide : empty


Function Execution Context




Eval Execution Context 
:property of global execution context




Memory Creation Phase : Space for Variables

Execution Phase


*/


let val1=10
let val2=20
function addNum(num1,num2){
    total=num1+num2
    return total
}


let results1=addNum(val1,val2)
let reslut2=addNum(4,6)

/*
1>Global Execution--->this
2>Memory Phase
val1->undefined
val2->undefined
addNum->function defination
result1->undefined
result2->undefined

Cycle2----Execution Phase
val1->10
val2->5
addNum->  Execution Context----new variable Env+Execution ThreadAgain Memory phase and Execution phase

Memory Phase     Execution Phase

val1->undefined     val1->10
val2->undefined     val2->20
total->undefined    total->15


total will be returned to global execution
and then get execy=ution context gets deleted




2 addNum ==> New +Thread

Memory Phase           Execution Phase
val1->undefined     val1->5
val2->undefined     val2->6
total->undefined    total->11


*/

//CALL STACK

/*
|__________________|   //LIFO
|__________________|
|__________________|
|__________________|
|_________Three()_________|
|________Two()__________|
|________One()__________|
|___Global Execution_______________|

*/
