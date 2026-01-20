const ages = [3, 10, 1, 20];

console.log(ages.findIndex(checkAge))

function checkAge(age) {
  return age>18;
}

// return index of first match condition 