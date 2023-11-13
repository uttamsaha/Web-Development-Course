function isEven(number) {
    if(number%2 == 0){
        return true;
    }
    return false;
}

const myNumber = isEven(1650);
console.log('My number is even: ',myNumber);

//odd function checker

function isOdd(number) {
    if(number%2 != 0) {
        return true;
    }
    return false;
}
const myNumbers = isOdd(1235);
console.log('My number is odd: ',myNumbers);