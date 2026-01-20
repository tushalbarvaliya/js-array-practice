const arr = [10,12,15,18,12,20,12,10]

console.log(arr.find((val,index)=>{
    if(val>=12){
        console.log(`${val} at ${index}`);
    }
}));
console.log(arr.find((val,index)=>{
    if(val>=12){
        return 'index'
    }
}));



// find method return the ffirst occurance of the matched condition 
// if return is written then it give undefined
// if return has any other val but find method always return val that match not the the value you want to return 