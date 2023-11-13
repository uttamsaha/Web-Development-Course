var danishPrice = 50;
var butterBreadPrice = 25;
var toastBuscuitPrice = 10;
var myBudget = 100;
var packedWell = true;

if (myBudget > danishPrice){
    console.log("I will eat danish");
}
else if(myBudget > butterBreadPrice) {
    console.log("I will eat butterBread")
}
else if(myBudget > toastBuscuitPrice) {
    console.log("I will eat toastBiscuit");
}
else{
    console.log("I will eat nothing.");
}

if(myBudget > danishPrice) {
    if(packedWell == true){
        console.log("I will eat")
    }
    else{
        console.log("I will not eat");
    }
}