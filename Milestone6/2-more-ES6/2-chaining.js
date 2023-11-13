// array destructuring
const [p, q, name] = [1, 10, 'komol'];
console.log(p, q, name);

//object destructuring
const {sky,color} = {sky: 'blue', color: 'red'};
console.log(sky, color);

//chaining

const company = {name: 'xyz', ceo: {ceoName: 'ablu', age:30}};

console.log(company?.ceo?.ceoName);
console.log(company.ceo?.gender);