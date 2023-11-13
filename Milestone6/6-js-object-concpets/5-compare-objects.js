const first = {a: 1, b:2};
const second = {a: 1, b:2};
const third = first;

if(first === second){
    console.log('Objects are equal');
}
else{
    console.log('Objects are not equal');
}


//compare or check 2 object are equal or not using stringify
if(JSON.stringify(first) === JSON.stringify(second)){
    console.log('Objects are equal');
}
else {
    console.log('Objects are not equal');
}


//compare 2 object using function
function compareObjects(obj1, obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    for(const prop in obj1){
        if(obj1[prop] !== obj2[prop]){
            return false;
        }
    }
    return true;
}
const isEqual = compareObjects(first, second);
console.log(isEqual);