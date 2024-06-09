//JavaScript arrays are resizable and can contain a mix of different data types. 
//The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

//JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
//Any changes made using reference will ffect orginal array


const myArr=[0,1,2,3,4,5]

const myarr=new Array(1,2,3,4,"Äniket")

//Array Methods

myarr.push(6)


const fruit = [];
fruit.push("banana", "apple", "peach");
console.log(fruit.length); // 3

//fruits.pop()
fruit.unshift("Amrud")
console.log(fruit)
fruit.shift()
console.log(fruit)


console.log(fruit.includes('Amrud'))
console.log(fruit.indexOf('banana'))
//Slice 
//The slice() method is a copying method. It does not alter this but instead returns a shallow copy that contains some of the same elements as the ones from the original array.

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']


//splice

//The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed


//splice
const arr=[1,3,4,5,6]
console.log(arr.splice(2,4))//includes index 4 and changes are made to the original array [4,5,6]
console.log(arr)//[1,3]