function fibonacciSeries(n){
    if(typeof n != 'number'){
        return 'Please give a number';
    }
    if(n < 2){
        return 'Please enter positive number greater than 2';
    }
    let fibo = [0,1];
    for(let i = 2; i <= 10; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

var fiboSeries = fibonacciSeries('komol');
console.log(fiboSeries);

function add(a, b){
  return a + b;
}
console.log(add("adam" + "eve"))


