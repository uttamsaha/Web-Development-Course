// //if i = 5 break the loop
// var i = 1;
// while (i <= 15) {
//     console.log(i);
//     if(i == 5) {
//         break;
//     }
//     i++;
// }

var numbers = [10,20,30,50,60,55,1,98];
for(var i = 1; i < numbers.length; i++) {
    var number = numbers[i];
    if(number > 50) {
        continue;
    }
    console.log(number);
}