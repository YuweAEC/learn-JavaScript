function subt1(x) {
    console.log(x);
  }
  
  subt1(1);
  subt1(1, 2, 3);
  
  // ---- Rest Parameter ---- //
  
  function subt(...x) {
    // x is an array
    console.log(x);
    console.log(x[0]);
  }
  
  subt(1);
  subt(1, 2, 3);
  
  // ---- Destructuring ---- //
  
  const y = [2, 45];
  const [t, s] = [1, "Hello"];
  console.log(t);
  
  // ---- Destructuring with Rest Operator ---- //
  const [a, b, ...c] = [1, 2, 3, 4, 5];
  console.log(a, b, c);
  
  // ---- Spread Operator ---- //
  function abc(a, b, ...c) {
    console.log(a, b, c);
  }
  
  abc(1, 2, 3, 4, 5);



  //////////////////



  function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    console.log("Sum:", total);
}
sum(1, 2, 3, 4, 5);

const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log("First:", first);
console.log("Second:", second);
console.log("Rest of the numbers:", rest);

const student = {
    name: "Yuvraj",
    age: 21,
    grade: "A",
    city: "Asansol"
};
const { name, ...otherDetails } = student;
console.log("Name:", name);
console.log("Other details:", otherDetails);

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6, 7, 8];
console.log("Original numbers:", numbers); // will print the cons no part
console.log("New numbers with additional values:", newNumbers); // here it will print the entire no part
