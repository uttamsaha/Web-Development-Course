var first = 5;
var second = 7;
var temp;

temp = first;
first = second;
second = temp;

console.log("First : ",first + "\nSecond = :",second);


// swap without temp
// destructuring

[first, second] = [second, first];
console.log("First : ",first + "\nSecond = :",second);