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

const copiedPerson = { ...person };
console.log("Copied object:", copiedPerson);

const updatedPerson = { ...person, city: "New York" };
console.log("Updated object:", updatedPerson);

const extraInfo = { country: "USA" };
const mergedPerson = { ...person, ...extraInfo };
console.log("Merged object:", mergedPerson);

const modifiedPerson = { ...person };
modifiedPerson.age = 35;
console.log("Modified copied object:", modifiedPerson);
console.log("Original object remains unchanged:", person);

const jobInfo = { job: "Engineer", experience: 5 };
const fullPerson = { ...person, ...jobInfo };
console.log("Full person details:", fullPerson);

console.log("Checking original after merging:", person);

const overridePerson = { ...person, age: 40 };
console.log("Overridden age:", overridePerson);
