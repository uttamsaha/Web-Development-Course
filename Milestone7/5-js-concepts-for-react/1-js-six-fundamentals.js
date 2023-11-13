//6 js fundamentals
//1. How to declare a varibale using let & const
const fatherName = 'Android';
let session = 'Rainy'

//2. conditions 
if(fatherName === 'android' || session === 'Rainy'){
    console.log('True');
}

//3. array
const number = [1, 2, 3, 4, 5, 6, 9];

//4. Loop
for(let i = 0; i < number.length; i++){
    console.log(number[i]);
}
//5. Functions
function multiply(number1, number2){
    const result = number1 * number2;
    return result;
}
const output = multiply(5,10);
console.log(output)

//6. Objects
const student = {
    name:'salib khan',
    age:32,
    movies: ['King khan', 'Dhakar mastan']
}
console.log(student.age); //direct access by property
console.log(student['age']); // access via string property name
const myVariable = 'age';
console.log(student[myVariable]); //access object property using variable 