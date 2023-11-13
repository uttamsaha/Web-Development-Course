//ekta array er element er value double kore onno array te copy kora

const doubleIt = number => number * 2;
const numbers = [4, 6, 8, 10];
const output = [];
for(const number of numbers){
    output.push(doubleIt(number));
}
console.log(output);


//doble array value & save to another array using map
//.map() -> array er prottek ta element k nei & sob element k lop caliye access kore & sei element ta map er moddhe j function ta call kora hobe sei function e ekta ekta kore pass hoi.
const array = [4, 8, 10, 12, 14];
 const result = array.map(doubleIt); 
 console.log(result);

 const square = array.map(x => x*x);
 console.log(square);