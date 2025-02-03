/*  1-var is hoisted ;
            
    2-let and const are also hoisted, but in the TDZ for timebeing

    let and const are stored in a seperate memory space other than the global memory. we can not access before value put in them.

 //   3-TDZ(temproal dead zone)- time between since varibale (created using let or const keyword) is hoisted and between value initilize to it.
 bets way to avoid TDZ is declear varibale created using let and const put in the top of the programe.

 //In JavaScript, a temporal dead zone (TDZ) is the period of time when a variable is declared but not yet initialized with a value.
 
    whenever we try to acccess varibale in TDZ - it wlll gives us a refrence error . can not access before initilization.

    
    types of error - 
    
    1- variable is not defined 
    when we try to access varibale befor initilize
    console.log(x);

    2- can not access before initization -
    console.log(x);
    let x = 5; // means x is in TDZ 


    we can  not access variabale created using let and cost in window object.
    varible created using keyword var is only access in window obbject, so var is known as global object.

    let a = 5 ; 
    wondow.a = undefined  // created using let,
    hoisted but in TDZ , so gives undefined 
     


    var a = 5 ;
    window.a= 5 // created using var , globally access

    const a = 5 
    window .a  = undefined  // hoisted but in TDZ , so gives undefined 

    window and this are the global object in case of browser.


    variable using let and const keyword cannot redeclear , 
    varibale created using const are not redeclear nor reinitilize.  , it will gives a type error
     
*/


console.log(x);

    