//slice
const numbers = [3,5,9,8,7,5,1,0,3];
const numberSliced = numbers.slice(4,8);
console.log(numberSliced);

//splice to remove element form array
const numbeSpliced = numbers.splice(4,2);
console.log(numberSliced);
console.log(numbers);


const numberSpliced2 = numbers.splice(4,3,99, 111,88);
console.log(numberSpliced2);