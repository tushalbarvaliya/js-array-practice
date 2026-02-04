const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Create an Iterable
const list = fruits.keys();

console.log(list);

for (let x of list) {
  console.log(x); 
}