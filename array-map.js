const arr = [1,2,3,4,5]


const sqrt_Arr = arr.map(Math.sqrt)
// console.log(sqrt_Arr);
// console.log(arr);

const power_of_two = arr.map((val)=>{
    return val**2;
})

// console.log(power_of_two);
// console.log(arr);

const n=[1,2,3,4,5,6,7,8,9,10]
const ten_table = n.map((val,index)=>{ return `10 * ${val}  = ${val*10}`})


console.log(ten_table);

// conclusion  
// map method pr function itrate all the value and return as per call back function and it not change the  the original array it return new array