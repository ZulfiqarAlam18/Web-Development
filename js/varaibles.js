var a = 10;

let b = 20;

const c = 30;

console.log(a + b + c);

//changing values

a = 15;
b = 25;
//c = 20; // This will cause an error because 'c' is a constant

d = 30; // Implicitly declared global variable
console.log(a + b + d);

let y = null;
let z;

console.table([y, z]);

//alert("Check the console for variable values");


// type of method

console.log(typeof a); // number
console.log(typeof b); // number
console.log(typeof c); // number
console.log(typeof d); // number
console.log(typeof y); // object (null is of type object in JavaScript)
console.log(typeof z); // undefined

// data types
