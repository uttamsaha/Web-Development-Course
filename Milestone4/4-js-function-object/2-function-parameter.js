function bringSingara(taka) {
    console.log("Given tk: ",taka);
    var singaraPrice = 5;
    var totalSingara = taka/singaraPrice;
    return totalSingara;
}
var tk = 250;
var quantiy1 = bringSingara(tk); //call function
console.log("Total quantity : ",quantiy1);

var quantiy2 = bringSingara(100);
console.log("Total quantity: ",quantiy2);