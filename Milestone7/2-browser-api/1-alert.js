console.log('I am here');
// alert('Ma is comming...');
const maComming = () => {
    alert('Ma is comming.......');
}

const goingPicnic = () => {
   const response = confirm('Are you going to picnic?');
   console.log(response);
   if(response){
       alert('Bkash me feee');
   }
   else{
       console.log('So you are not going...');
   }
}

const askName = () => {
    const name = prompt('What is your name: ');
    if(name){
        console.log(name);
    }
}