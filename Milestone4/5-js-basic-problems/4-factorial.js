function factorial(number) {
    var sum = 1;
    for(var i = 1; i <= number; i++){
        sum *= i;
    }
    return sum;
}
const myNumber = factorial(6);
console.log(myNumber);

var myFactorial = factorial(10);
console.log(myFactorial);