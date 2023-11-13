function factorial(n){
    if(n == 1){
        return 1;
    }
    return n * factorial(--i);
}
console.log(factorial(4));