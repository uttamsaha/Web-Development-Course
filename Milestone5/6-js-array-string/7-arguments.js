function addNumbers(){
    let result = 0;
    for(const num of arguments){
        console.log(num);
        result += num;
    }
    return result;
}

const result = addNumbers(200,300,500,400,300,200);
console.log('Result = ',result);