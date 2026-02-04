const number = [10,20,30]


const sum = number.reduce((val,crr) =>{
    return val+crr
})

const sub_f = number.reduce((val ,crr) =>{
    return val-crr;
})
console.log(number);
console.log(sum);
console.log(sub_f);

// conclution

// reduce functtion return value and doesn't change original array
// callback function take mainly two parameter first previos value of function and seconde is current value


