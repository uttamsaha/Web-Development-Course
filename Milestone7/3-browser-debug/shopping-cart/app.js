function updateProductNumber(product, price, isAddition){
     const productInput = document.getElementById(product+'-number');
    let productNumber = productInput.value;
    if(isAddition == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    // caseInput.value = caseNumber;

    //update case total
    productInput.value = productNumber;
   const productTotal = document.getElementById(product+'-total');
   productTotal.innerText = productNumber * price;

   //calculate total function call
   calculateTotal();
}


function getInputValue(product){
       const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber; 
}

//function calculate subtotal
function calculateTotal(){

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;

    const tax = subTotal / 10; 
    const totalPrice = subTotal + tax;//10% of total

    //update subtotal
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;


}

//handle phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone',1229,true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone',1229,false);
});

//hanlde case increase decrease event
document.getElementById('case-plus').addEventListener('click', function(){
   updateProductNumber('case',59,true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case',59,false);
});
