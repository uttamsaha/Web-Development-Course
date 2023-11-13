//0,1,   1, 2, 3, 5, 8, 13, 24, 34, 55, 
/*
3rd = 2nd + 1st;
4th = 3rd + 2nd;
16th = 15th + 14th
nth = (n-1)th + (n-2)th
*/
// first 0, 1 er pore theke suru kobro 2 no positon theke.
let fibo = [0,1]; 
for(let i = 2; i <=10; i++) {
    //ith = (i -1)th + (i -2)th
    fibo[i] = fibo[i-1] + fibo[i-2];
    
}
console.log(fibo);




//function

function fibonacciSeries(n){
    let fibo = [0,1];
    for(let i = 2; i <= 10; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

var fiboSeries = fibonacciSeries(13);
console.log(fiboSeries);
