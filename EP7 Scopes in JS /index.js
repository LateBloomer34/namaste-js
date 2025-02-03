/* scope - where we access the varibale and function of our code. 

lexical enviroment -  is a local  memory (function scope) with lexical enviroment of programe (with its parent,s scope). 


example  :- 

function a (){
    let v = 6;
    function c(){
    console.log(v); 
    }
}

c function is inside the function a ; 
means c is inside the lexical scope of a ;
and a is inside the Global scope , meand a is inside the lexical scope of a ;

local memory first search the varibale in current local scope, if not found the varibale in the lexical enviroment of its parent, it fiend till global scope 




    ---- scope chain -  mechanism of searching varibale in its parent lexical enviroment is known as scope chain .

    ex - 
    let c = 5;
    a();
    function a(){
    b()
    function b(){
    console.log(c)}
    } 

    in above example -  
    lexical enviroment -  try to access the value from iniside the function. if value not present inside the function it will try to access value from its parent , 
    this method is called scope chaining.

    

    if variable not found anywhere , we can say varibale is not present in scope chain. and gives varibale is not defined.

*/