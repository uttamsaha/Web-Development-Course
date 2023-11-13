const myNumber = -5;
var output = Math.abs(myNumber);
console.log(output);

const myNumber1 = 2.0398;
output = Math.ceil(myNumber1);
console.log(output);

const myNumber2 = 2.9398;
output = Math.floor(myNumber2);
console.log(output);

const myNumber3 = 2.9398;
output = Math.round(myNumber3);
console.log(output);

output = Math.random()*10;
const rounded = Math.round(output);
console.log(rounded);


//random number between 1-10 using loop
for(let i = 1; i <= 20; i++) {
    const output = Math.random()*10;
    const rounded1 = Math.round(output);
    console.log(rounded1);
}

