const numbers = [23, 55, 99, 85, 12, 35, 50];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23,99,65);
console.log(max);

//max number in array
const maxInArray = Math.max(...numbers);
console.log(maxInArray);


const  numbers2 = [...numbers];
numbers.push(44);
console.log(numbers2);