function factorial(number) {
    var sum = 1;
    var i = number;
    while(i >= 1){
        sum = sum * i;
        i--;
    }
    return sum;
}

let myFactorial = factorial(3);
console.log("Factorial: ",myFactorial);