function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

//Function expression (anonymous)
const add2 = function (num1, num2){
    return num1 + num2;
}
const sum = add2(10, 20);
console.log(sum);


//arrow function
const add3 = (num1, num2) => num1 + num2;
const sum2 = add3(10, 20);
console.log(sum2);