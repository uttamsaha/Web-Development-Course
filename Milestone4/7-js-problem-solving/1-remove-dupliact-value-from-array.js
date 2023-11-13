
function removeDuplicated(names) {
    const unique = [];

    for(const element of names){
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}

/*FOR EACH LOOP
for(const element of names){
    console.log(element);
}
names is an array names array er sob element print hobe.
*/
const names = ['komol','omol','rocky','vicky','nicky','dicky','komol','omol','vicky'];
const uniqueNames = removeDuplicated(names);
console.log(uniqueNames);
