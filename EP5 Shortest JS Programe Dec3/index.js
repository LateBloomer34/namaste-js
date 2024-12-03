/* 
the shortest programe in js is empty file, beause if we run a empty file js engine  creates a execution context with global object  window and this keyword .

whenever a js programe is run -
        a global execution context is created.
        a global object window is created.
        a global varibale this is created .

    this===window => gives true in console

what is global space - a varible which is not inside a function is global space.


*/


var a = 5 ;
function ab (){
    let a = 6;
    console.log(this. a);
}
ab();
console.log(a);
// gives 5,5 in output because this and whis is global object , they will aceesss value from the global object.



var a = 5 ;
function ab (){
    let a = 6;
    console.log( a);
}
ab();
console.log(a);

// op - 6,5  -  because a variable inside function ab has a function scope.
