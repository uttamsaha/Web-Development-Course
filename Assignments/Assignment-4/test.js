function picnicBudget(n){
    var totalCost = 0;
    for(let i = 1; i <= n; i++){
        if(i <= 100){
            totalCost += 5000;
        }
        else if(i>100 && i<=200){
            totalCost += 4000;
        }
        else {
            totalCost += 3000;
        }
    }
    return totalCost;
}
var totalPicnicCost = picnicBudget(100);
console.log(totalPicnicCost);