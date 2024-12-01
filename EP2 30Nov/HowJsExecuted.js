var n = 2 ;
function square (num){
    var ans = num * num ;
    return ans ;
}
var square2 = square(n);
var square4 = square(4);

/*

step1 -  execurtion context created with memory phase ans code execution phase ;


in memory phase, memory allocated to all variable and functions.

n:undefined
square:{ ans :undefined }
square2 :undefined
square4 :undefined


in code phase :
value provided to the variables,
n :4

now dirct move to square2 (line 6)
in line 6 square2 invoke a function with num value == n, because there is a function , a new execution context is created for square (n).

in memory phase of square(n) execution context.
num = undefined;
ans:undefined;

in code phase : 
num = n ==2  ;//2 from global scope
ans = 2*2  ;

and in global execution context value of square2 updated from undefined with 4   //line 18

in line 7 : also a new execution context is created ;
in memory phase 
num : undefined
ans : undefined
in code phase :
num = 4;
ans = 4*4 ==16;

and in global execution context value of square2 updated from undefined with 16   //line 19


return keyword state that  give the control of  the code, where  function was invoked.

after return statement the value store in main execution context , and the current execution context will deleted;
*/



// whenever a new function is invoked a new execution contaxt is created 


//      --- call stack maintain the order of execution 