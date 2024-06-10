//Immediately Invoked Function Expression (IIFE)



(function chai(){
    console.log(`DB CONNECTED`);
})();  //always end with semi colon 


//global variables ke pollution ko hatane ke liye hamne () ka use kiya hai aur ise kohi call ki bi jarurat nahi hai

(
    (name)=>{
        console.log(`${name}, DB CONNECTED TWO`)
    }
)("ÄNiket");
