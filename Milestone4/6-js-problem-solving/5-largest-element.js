function largestElement(numbers){
    var largest = 0;
    for(var i = 0; i < numbers.length; i++){
        if(largest < numbers[i]){
            largest = numbers[i];
        }
    }
    return largest;
}

let numbers = [1,2,4,5,6,7,8,9,10,0,45,100,15,20];
let largest = largestElement(numbers);
console.log(largest);