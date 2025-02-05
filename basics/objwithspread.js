const species = { type: "Mammal", movement: "Walks" };

const dog = { ...species, breed: "Labrador", color: "Golden" };
const cat = { ...species, breed: "Siamese", color: "White" };

const dog1 = {
    type: "Mammal",
    movement: "Walks",
    breed: "Labrador",
    color: "Golden",
};
const cat1 = {
    type: "Mammal",
    movement: "Walks",
    breed: "Siamese",
    color: "White",
};

// TODO Practice more


const person = {
    name: "John",
    age: 30
};
console.log("Original object:", person);

const copy = { ...person };
console.log("Copied object:", copy);

const Update = { ...person, city: "New York" };
console.log("Updated object:", Update);

const Modify = { ...person };
Modify.age = 21;
console.log("Modified copied object:", Modify);
console.log("Original obj remains unchanged:", person);

const job = { job: "Engineer", experience: 5 };
const fullPerson = { ...person, ...job };
console.log("Full person details:", fullPerson);

console.log("Checking original after merging:", person);
