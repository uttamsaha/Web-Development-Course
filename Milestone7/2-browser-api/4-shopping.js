const displayLocalStrongCart = () => {
    const cart = getCart();
    for(const product in cart){
        displayProduct(product);
    }
}

const addItem = () => {
    const inputField = document.getElementById('product-name');
    const inputFieldValue = inputField.value;
    if(!inputFieldValue){
        return;
    }
    //display in the ui
    displayProduct(inputFieldValue);


    //add to local storage
    addProductToCart(inputFieldValue);

    //

    inputField.value = '';
}

const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}


const getCart = () => {
    const cart = localStorage.getItem('cart');
    //dekhbo j localStroage e cart ache kina 
    let cartObj;
    if(cart){
        //local storag e cart thakle seta JSOn e thakbe setake object e convert korte hobe..
        cartObj = JSON.parse(cart);
    }
    else{
        //jodi na thake tahole empty object make korbo... 
        cartObj = {};
    }
    return cartObj;
}

const addProductToCart = name => {
    const cart = getCart();
    if(cart[name]){
        cart[name] = cart[name] + 1;
    } else{
        cart[name] = 1;
    }
    console.log(cart);
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}

const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}
displayLocalStrongCart();

//ekhane localStroage na likhe session storage likte session storage e kaj hobe..
