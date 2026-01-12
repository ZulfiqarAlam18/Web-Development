
// fucntions
function add(a, b) {
  return a + b;
}

let sum = add(5, 10);

console.log(sum);

function greet(name) {
  return `Hello, ${name}!`;
}

let message = greet("Zulfiqar");

console.log(message);

// arrow functions

const multiply = (x, y) => {
  return x * y;
};

let product = multiply(4, 5);

console.log(product);

const square = x => x * x;

let squaredValue = square(6);

console.log(squaredValue);

// function expression

const divide = function(a, b) {
  return a / b;
};

let quotient = divide(20, 4);

console.log(quotient);

// IIFE (Immediately Invoked Function Expression)

(function() {
  console.log("This function runs immediately upon definition!");
})();

// function with default parameters

function greetUser(name = "Guest") {
  return `Welcome, ${name}!`;
}

console.log(greetUser());
console.log(greetUser("Alam"));

// function with rest parameters

function sumAll(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

let total = sumAll(1, 2, 3, 4, 5);

console.log(total); // 15      
// callback function

function fetchData(callback) {
  setTimeout(() => {
    const data = "Sample Data";
    callback(data);
  }, 1000);
}

fetchData(function(data) {
  console.log("Received:", data);
});
// higher-order function

function operateOnNumbers(a, b, operation) {
  return operation(a, b);
}

let result = operateOnNumbers(10, 5, (x, y) => x - y);

console.log(result); // 5
// function hoisting

console.log(subtract(10, 5)); // works due to hoisting

function subtract(a, b) {
  return a - b;
}

// recursive function

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

let fact = factorial(5);

console.log(fact); // 120   

// function as first-class citizens

const functionsArray = [
  function(x) { return x + 1; },
  function(x) { return x + 2; },
  function(x) { return x + 3; }
];

functionsArray.forEach((func, index) => {
  console.log(`Function ${index + 1} result:`, func(5));
});

// arrow function with implicit return

const greetArrow = name => `Hi, ${name}!`;

console.log(greetArrow("Zulfiqar"));    
// function with closure

function outerFunction(outerVar) {
  return function innerFunction(innerVar) {
    console.log(`Outer Variable: ${outerVar}`);
    console.log(`Inner Variable: ${innerVar}`);
  };
}

const newFunction = outerFunction("outside");

newFunction("inside");      
