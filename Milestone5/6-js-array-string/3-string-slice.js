const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
const words = anthem.split(' ');
console.log(words);

const word2 = anthem.split('a');
console.log(word2);

//slice
const smallSlice = anthem.slice(5,15);
console.log(smallSlice);

//substr
const antoherString = anthem.substr(11,7);
console.log(antoherString);

//substring
const anotherPart = anthem.substring(11,15);
console.log(anotherPart);

//concat
const first = 'Love you';
const last = 'mariya';
const total = first.concat(last).concat('abc').concat(' xyz');
console.log(total);

//join 
const words2 = ['a', 'b', 'c', 'd'];
const allJoined = words2.join(', ');
console.log('first',allJoined);