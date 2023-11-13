function sum(i) {
    console.log(i);
    if(i == 1){
        return 1;
    }
    return i + sum(--i);
}
console.log(sum(5));


const array = [1, 2, 3, 4, 5, 6, 7];
for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
 console.log(array[i]);
}