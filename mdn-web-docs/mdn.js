// const foo = () => {
//     console.log("Hello");
// }


// foo();


//We assigned an Anonymous Function in a Variable, then we used that variable to invoke the function by adding parentheses () at the end.?



// function hello1(){
//     return "Hello";
// }


// function hello2(a , b)
//     console.log(a() + b);
// }


// hello2(hello1 , "manoj")



function sayHello(){
   return () => {
         console.log("Hello");
   };
}

sayHello()();