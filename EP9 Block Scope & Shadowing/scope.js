/*what is block -
code inside {} is called the block ;insite which we can write the group of code or multiple statement.; 

var a1 = 67

{
    var a1 = 6
    console.log(a1);
    
    let a = 0;
    console.log(a);
    let b = 5;
    console.log(b);    
}
console.log(a1);
/*
/*
// hoisiting -  access variable and function before initilization.

// let and const are the block scope, var is the global scope.

// block scope value store seprate than global , value created using let and const are access inside the block only, but value created using keyword var , can access outside the block also, so var is global scope.

// block follows the lexical scoping while acceing the variable .

shadowing - variable declear with a same name and things (property) change , which are present outside the scope, is known as shadowing.

shadowing will change the orignal value of the variable. */
/*
let a = 15;
{
    let a = 20; ///shadowing the value of a 
    console.log(a);
}
*/
/* illegal shadowing - 

if global scope is created using let, and we try to shadow the variable with keyword var inside block, this is illigal scoping. */
/*
let b = 34;

{
    var b = 36;
    console.log(b);
    //illegal , it throws an syntax error; identifier b has been already decleard.
}
*/
