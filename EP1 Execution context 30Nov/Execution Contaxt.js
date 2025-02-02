
/* Everything happen in JS inside Execution Contaxt.

execution contaxt is like a big box, inside which all js process will be done frommemory allocation to execution.

there are two main phases in Executon contaxt.

1-  memory phase -- in the memory phase js engine allocate memory to all variable and function before the execution. 

it is also known as variable enviroment or creation phase.  

2- code phase - in code phase , js code will executed line by line and synchronoisly, 

it is also known as thread of execution.

example
function add(x, y) {
  let sum = x + y;
  return sum;
}

let result = add(2, 3);


In the memory phase:
Memory is allocated for the add function and its code. 
        add:{ x: undefined
              Y: undefined  }

Memory is allocated for the variable result, which is initialized with undefined.
        sum:undefined
        result:undefined

In the code execution phase:
The add function is called with the arguments 2 and 3.
The code within the add function is executed, calculating the sum and returning the result.
The value 5 is assigned to the result variable.



conclusion-- js is a synchronous single threaded language.

synchronous -  code execute line by line in a fixed manner.
single threaded- one line executed at a time.*/


/*parsing phase- 
the parsing phase in done before the memory phase - in parsing phase code is broken down into token, and thses token convert into AST(abstract syntax tree);


Example:

const message = "Hello, world!";
console.log(message);
The AST for this code would look something like:
Code

Program
  - VariableDeclaration
    - Identifier: message
    - Literal: "Hello, world!"
  - ExpressionStatement
    - CallExpression
      - MemberExpression
        - Identifier: console
        - Identifier: log
      - Literal: "Hello, world!"

*/