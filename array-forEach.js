const fruits = ["apple", "orange", "cherry"];
console.log(fruits.forEach(myFunction))


function myFunction(val,index,arr){
    console.log(`val = ${val}`);
    console.log(`index = ${index}`);
    console.log(`arr = ${arr}`);
    return 0
}


console.log(fruits.map(myFunction));

// difference between forEach and map function 
// forEach not return any value
// map always return value
