function start() {
    console.log("This is a function"); // statement 1
  }
  
  start;
  
  start(); //--> this runs line 1 in func Body, i.e statement 1
  // o/p->This is a function
  
  function stop() {
    const x = 10; // statement 1
    return x; // statement 2
  }
  
  stop();

let result = myFunction(4, 3);

function myFunction(a, b) {
  return a*b;
}


// function toCelsius(fahrenheit) {
//   return (5/9) * (fahrenheit-32);
// }

// let value = toCelsius(77);

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius();

// const val2 = (() => 10)();

{
  function stop() {
    const x = 10; // statement 1
    return x; // statement 2
  }
  const val2 = stop();
}


// const val2 = function stop() {
//   const x = 10; // statement 1
//   return x; // statement 2
// }();

// const val2 = () => {
//   const x = 10;
//   return x;
// };

console.log(val2)

// const val2 = function stop() {
//   const x = 10; // statement 1
//   return x; // statement 2
// }



/////

function start() {
  // Function Declaration/ Definition
  console.log("This is a function"); // statement 1
}

start;

// function invocation or calling the function
start(); //--> this runs line 1 in func Body, i.e statement 1
// o/p->This is a function

function stop() {
  const x = 10; // statement 1
  return x; // statement 2
}

const val1 = stop;
// the above line is equivalent to below lines

// function val1() {
//   const x = 10; // statement 1
//   return x; // statement 2
// }
let t = 10;
const val2 = stop();

const val3 = val1(); //--> stop()

// way1 of defining a function
{
  function move() {
    console.log("hello");
  }
}

// way2(Function Expression) of defining a function --
const move = function () {
  console.log("hello");
};
// the above finction definition is equivalent to below
/* 
function move() {
    console.log("hello")
  }
*/

const y = function () {
  // This is an anonymous function
  console.log(10);
  return "Hello";
};

x(); // Function call/ Invoking the function



let x = myFunction(4, 3);

function myFunction(a, b) {
    return a * b;
}

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

