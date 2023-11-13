// for(let i = 1; i <= 5; i++){

// }

function consoleNumber(i) {
    if(i > 10) {
        return;
    }
    console.log(i);
    consoleNumber(i+1);
}
consoleNumber(1);