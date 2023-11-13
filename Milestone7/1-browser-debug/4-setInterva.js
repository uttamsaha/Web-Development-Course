console.log('First');
// setInterval( function(){
//     console.log('second');
// }, 3000)
console.log('Third');

let seconds = 0;
const timeId = setInterval(function (){
    seconds++;
    console.log(seconds);
    if(seconds > 15){
        clearInterval(timeId);
    }
},1000)