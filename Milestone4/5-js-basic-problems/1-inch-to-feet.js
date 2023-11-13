// var inches = 132;

// var feet = inches / 12;
// console.log(feet);

function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}
var myInch = inchToFeet(12);
console.log(myInch);


//Mile to kilo meter
function mileToKilo(mile) {
    var kilo = mile * 1.60934;
    return kilo;
}

var myMiles = mileToKilo(100);
console.log("Mile to kilo: ",myMiles);