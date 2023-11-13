function leapYear(year) {
    if(year%400 == 0 || (year%4==0 && year%100!=0)){
        return true;
    }
    else{
        return false;
    }
}

const myYear = leapYear(2087);
console.log("My year is leap year: ",myYear);

const yourYear = leapYear(2000);
console.log("Your year is leap year: ",yourYear);