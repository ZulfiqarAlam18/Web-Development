

// Explicit conversion 

// any data type to number

let a = "5";
let isLogedIn = true;

b = Number(a);

c = Number(isLogedIn);

console.log(typeof c);



// any data type to string

let d = 34;
let isAdmin = false;

e = String(d);

f = String(isAdmin);

// another way

z = d.toString();

console.log(typeof z);

console.log(typeof f);


// any data type to boolean

let g = 1;
let h = 0;
let i = "hello";
let j = "";

k = Boolean(g);
l = Boolean(h);
m = Boolean(i);
n = Boolean(j);

console.log(k); // true
console.log(l); // false
console.log(m); // true
console.log(n); // false


// partse int and parse float 

let num1 = parseInt("10px");     // 10
let num2 = parseFloat("10.5kg"); // 10.5
parseInt("px10");     // NaN
parseFloat("kg10.5"); // NaN


let str1 = "10kg";
let str2 = "10.5kg";

num1 = Number(str1);
num2 = Number(str2);

console.log("Results..........................");


console.log(num1+num2);


console.log("5" + 2);
console.log("5" - 2);
console.log(true + false);



let value = "";

if (value) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}


let score = 10;

let negScore = -score;

console.log(negScore);






