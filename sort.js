const fruits = ["Banana", "Orange", "Apple", "Mango"];
const number = [10,2,13,4,5,6,7,8,9]
// Sort the Array
fruits.sort();
number.sort((a,b)=> a-b);
console.log(number);
number.sort((a,b)=> b-a);
console.log(fruits);
console.log(number);

