//deposit & withdraw er input theke text niye value te convert kora ekdom same jonno function banabo.

function getInputValue(input){
     const inputField = document.getElementById(input);
     const amount = parseInt(inputField.value);
        //clear deopsit input field
    inputField.value = '';
    return amount;
}

//update deposit / withdraw field
function updateField(input,amount){
    const text = document.getElementById(input);
    const currentText = parseInt(text.innerText);
    const updatedText = currentText + amount;
    text.innerText = updatedText;
    return currentText;
}


function getCurrentBalance(input){
    const totalBalance = document.getElementById(input);
    const updatedBalance = parseInt(totalBalance.innerText);
    return updatedBalance;

}
function updateBalance(input,amount,isAddition){
    const totalBalance = document.getElementById(input);
    // const updatedBalance = getCurrentBalance();
    const updatedBalance = parseInt(totalBalance.innerText)

    if(isAddition == true){
        const updatedTotalBalance = updatedBalance + amount;
        totalBalance.innerText = updatedTotalBalance;
    }
    else{
        const updatedTotalBalance = updatedBalance - amount;
        totalBalance.innerText = updatedTotalBalance;
    }
    
}



document.getElementById('deposit-btn').addEventListener('click', function(){
    
    const depositAmount = getInputValue('deposit-input');
    //set deposit
    if(depositAmount > 0){
        updateField('deposit-text',depositAmount);
        updateBalance('total-balance',depositAmount,true);
    }
    
});


//withdraw calculation
document.getElementById('withdraw-btn').addEventListener('click', function(){
     const withdrawValue = getInputValue('withdraw-input');
     const currentBalance = getCurrentBalance('total-balance');
    if(withdrawValue > 0 && withdrawValue < currentBalance){
        updateField('withdraw-text',withdrawValue);
        updateBalance('total-balance',withdrawValue,false);
    }
    
})