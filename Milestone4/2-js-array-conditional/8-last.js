var tableLength = 12;
var tourDestination = ['coxbazar', 'nepal', 'vutan', 'paris'];


if(tourDestination[0] == 'coxbazar') {
    console.log("Cox's bazar");
} else{
    console.log("Cox's bazar is not in index 0")
}


for(var i = 0; i <= tourDestination.length; i++) {
    if(tourDestination[i] == 'nepal'){
        console.log("Nepal found at index",i);
    }
}