// 2 ta number jok korar arrow function
const add = (num1, num2) => num1 + num2;
const sum = add(10, 20);
console.log(sum);

//multiply 3 number
const multiple = (num1, num2, num3) => num1 * num2 * num3;
const result = multiple(2,3,6);

//no parameter funciton
const getName = () => 'Komol Saha';
const name = getName();
console.log(name);

//arrow function multi-operation / multi-line
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const total = doMath(12, 5);
console.log(total);