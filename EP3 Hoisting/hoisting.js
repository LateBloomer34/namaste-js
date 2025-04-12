/* hoisting -

variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code 
is executed.

access the variable and function even before initilization or put some value in it; doesnt matter where is it in the programe.
*/



//----call stack - control/ maintain the order of execution.

/* hoistiong is the method  to access varibale and function before initilization, the js engine creates a execution context. 
in which there are two main component , memory allocation phase and code execution phase .

when we call a function a brand new execution context is created. after gets return keyword
or compltion of function this execution context will be deleted or poped off from call stack.
*/
 
// example1 - 

/*
let x = 7;
function getName(){
    console.log("hello")
}
console.log(x);
console.log(getName());
*/

// op- 7
//  hello
//  undefined  ----undefined for conosle.log


// ex-2 
/*
console.log(getName());
console.log(x);
let x = 7;
function getName(){
    console.log("hello")
}
*/
// op - hello
//      undefined
//     ReferenceError: Cannot access 'x' before initialization

// ex- 3
/*
console.log(x);
console.log(getName());
let x = 7;
function getName(){
    console.log("hello")
}
*/
// op- Cannot access 'x' before initialization


// ex-4
/*
let x = 7;
function getName(){
    console.log("hello")
}
console.log(getName);
*/
//op - shows the entire getName function

// ex -5 
/*
console.log(getName);

let x = 7;
function getName( ){
    console.log("hello")
}
*/
// op - shows entire getName function




// above whole concept lies in execution context
// before execution the memory allocated to each and every variable and function

getName()
console.log(x);
console.log(getName);

var x = 7;
function getName(){
    console.log("hello")
}
console.log(x);
getName();


//in case of arrow function - if we call arrow function before initilize , it will thows error , can not access before initilztion.

// it is a function but it behave like a variable 

/*
let fun = function name (){
    console.log("hello")
}
    */
//this type of function is also behave like a variable
