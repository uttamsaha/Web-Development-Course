//Ternary operatior

let food;
const money = 80;
const myVar = 50;

const food1 = money > 100 ? 'Biriyani' : 'Biscuit';
console.log(food1);

let drink = (money> 100 && myVar > 100) ? 'Cooke' : 'water';
console.log(drink);



//convert number to string
const num = 55;
const resNum = num + '';
console.log(resNum);

//convert string to number
const input = '555';
const inputNum = +input;
console.log(inputNum);


//sortcut ternamry operator
const isActive = true;
const showUser = () => console.log('Show user');
const hideUser = () => console.log('Hide user');
isActive ? showUser() : hideUser();
