
const lowerCase = 'iloveyou';
const uperCase = lowerCase.toUpperCase();
console.log(uperCase);



const userInput = 'BlackPink';
const savedUserName = 'blackPink';
if(userInput.toLocaleLowerCase() == savedUserName.toLocaleLowerCase()){
    console.log('user exist');
}
else{
    console.log('user doesnt exist');
}