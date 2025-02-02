// function is a blackbox, we dont knows what is inside it, only the devloper knows.

// function is a reusable block of code, which can do a specific task.

// in the hoisting memory allocated to all variable and function ,

// every function makes it own local execution context ,  after the completion of all statement or go to return keywrod this local execution context will deleted. 


let x = 5 ;
a();
b();
function a(){
    let x = 6 ;
    console.log(x);
    
}
function b(){
    let x = 7;
    console.log(x);
}
console.log(x);

/*
explanation of above code- 
1- global execution context created, there are two main 
2 - in memory componont, memory allocated to all variables and function in key value form
i - x: undefined
ii - a:{}
iii- b:{}

3-
in code execution phase ;
i - x:5 
ii - for a function a brand new execution context will created .

here also 2 phases , memory and code execution phase .

memory phase :
x:undefined;
code phase; 
x= 6 ; print 6 in console window

after the completion of alll statment code will go to global execution context. the execution context for function a deleted.

now code goes to next line : 
where function b called; for this function b a brand new call execution context will generated.

memory phase :
x:undefined;

code phase; 
x= 7 ; print 7 in console window

after the completion of alll statment code will go to global execution context. the execution context for function a deleted.

now all statement of program will executed; no code is left. entire global execution context will deleted.
*/
