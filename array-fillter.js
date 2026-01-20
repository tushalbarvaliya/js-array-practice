const arr = [1,2,3,4,5,6,7,8,9]

const even = (val)=>{
    return val%2==0?val:null
}
const odd = (val)=>{
    return val%2==0?null:val
}

const evenarray =arr.filter(even)
const oddArray = arr.filter(odd)

console.log(arr);
console.log(evenarray);
console.log(oddArray);

console.log(arr.filter((val,index)=>{
    if(index%2!=0){
        console.log(index,val);
        return val
    }
}));


// conclution 

// it also don't change original array and return as per function in funnction it take value for perameter 