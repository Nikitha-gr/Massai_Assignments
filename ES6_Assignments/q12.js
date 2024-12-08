//Square and Cube of a number with Implicit Return
//Write an arrow function that takes a number as input and returns both its square and cube in an object,
//using implicit return. The function should be as concise as possible.
//Requirements:
//The arrow function should use implicit return (no curly braces or return keyword).
//The function should return an object in the format { square, cube }.

let sqrCube = (num)=>({square:(num*num),cube:(num*num*num)});

console.log(sqrCube(5));