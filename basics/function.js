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

let x = myFunction(4, 3);

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

const val2 = () => {
  const x = 10;
  return x;
};

console.log(val2)