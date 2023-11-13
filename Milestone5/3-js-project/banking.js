document.getElementById('deposit-btn').addEventListener('click', function(){

    //get the deposite amount
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;

    const depositText = document.getElementById('deposit-text');
    const previousDepositAmount = depositText.innerText;
    
    //calculating deposit
    const updatedDepositTotal = parseInt(previousDepositAmount) + parseInt(depositAmount);
    depositText.innerText = updatedDepositTotal;

    //clear deposit input field
    depositInput.value = '';

    //calculate total balance
    const totalBalance = document.getElementById('total-balance');
    const currentBalance = totalBalance.innerText;

    const updatedBalance = parseInt(currentBalance) + updatedDepositTotal;
    totalBalance.innerText = updatedBalance;
});

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValue = withdrawInput.value;

    const withdrawText = document.getElementById('withdraw-text');
    
    const currentWithdrawAmount = withdrawText.innerText;
    const updatedWithdrawAmount = parseInt(currentWithdrawAmount) + parseInt(withdrawInputValue);
    withdrawText.innerText = updatedWithdrawAmount;
    
    //clear withdraw input field
    withdrawInput.value = '';

    //calculating balance decreasing for withdraw
    const totalBalances = document.getElementById('total-balance');

    const updatedBalances = totalBalances.innerText;

    const updatedTotalBalances = parseInt(updatedBalances) - parseInt(withdrawInputValue);

    totalBalances.innerText = updatedTotalBalances;

})