const numbers = [1, 2, 3, 4, 5,6 ,7];
const student = {
    name:'salib khan',
    age:32,
    movies: ['King khan', 'Dhakar mastan']
}

//template string
const about = `My name is ${student.name} my age is ${student.age} has number ${numbers[2]}`;
console.log(about);

//arrow function with single line return 
const age = () => 55; // return 55;
const addSixyFive = number => number+65;
const isEven = x => x%2==0;
const addThree = (x, y, z) => x + y + z;
//Multi line arrow function
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}


//spread operator:
const numbers1 = [1, 2, 3, 4, 5,6 ,7];
const newNumbers = numbers;
numbers.push(99);
console.log(newNumbers);

//solve using spread operator
const numbers2 = [1, 2, 3, 4, 5, 6, 8];
const newNumbers2 = [...numbers2];
numbers.push(99);
console.log(newNumbers2);