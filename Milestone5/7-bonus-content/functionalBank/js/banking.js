function getInputValue(filedId){
    const inputFiled = document.getElementById(filedId);
    const valueInText = parseFloat(inputFiled.value);
    inputFiled.value = '';
    return valueInText;
}
function getInnerTextValue(fieldId){
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}

function updateTotal(fieldId,amount){
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;

}

function updateBalance(amount,isAddition){
    const balanceTag = document.getElementById('total-balance');
    const previousBalance = parseFloat(balanceTag.innerText);
    let newBalance;
    if(isAddition){
     newBalance = previousBalance + amount;
    }
    else{
        newBalance = previousBalance - amount;
    }
    balanceTag.innerText = newBalance;
}
document.getElementById('deposit-btn').addEventListener('click', function(){
    const amount = getInputValue('deposit-input');
    if(amount > 0){
        updateTotal('deposit-text',amount);
        updateBalance(amount,true);
    }

});

//handle withdraw
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const amounts = getInputValue('withdraw-input');
    if(amounts > 0){
        updateTotal('withdraw-text', amounts);

        updateBalance(amounts,false);
    }
    
})