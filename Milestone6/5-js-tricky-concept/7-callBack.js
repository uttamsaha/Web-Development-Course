function welcomeMSG(name, greet){
    greet(name);
}

function greetMorning(name){
    console.log('Good morning',name);
}
function greetNoon(name){
    console.log('Good Noon',name);
}
welcomeMSG('Komol',greetMorning);
welcomeMSG('Uttam', greetNoon);

//-> Ekhane welcomMsg namer ekta function 2 ta parameter name, greet, r geetMoring & greetNoon namer 2 ta function /   welcomeMSG function k jokhon call kortesi tokhon parameter e name & greetMoring/greetNoon function ta pass kore dicchi seta welcomeMSG function er greet e jacche greet ekta function tokhon ei greet e abr jokhon call kortesi tokhon greetMoring / greetNoon function call hocce. etai call back funciton
