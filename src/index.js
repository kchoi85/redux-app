// in javascript, functions are like first-class citizen

let numbers = [1, 2, 3];
numbers.map((number) => number * 2);

//higher order f(x) as ittakes function as argument
setTimeout(() => console.log("hello"), 1000);

let book = {};
book.title = "...";
console.log(book);

// spread operator
const person = { name: "Dave" };
const updated = { ...person, name: "Vunu" };
console.log(updated);
