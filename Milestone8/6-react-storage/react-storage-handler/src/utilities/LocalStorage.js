const addToDB = id => {
    //add multiple data in an object to loacl storage

    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    else{
        shoppingCart = {};
    }


    //add quantity
    const quantity = shoppingCart[id]; //shopping cart er modhe id thakle

    if(quantity){
        const newQuantiy = quantity + 1;
        shoppingCart[id] = newQuantiy;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
    


    //add single data to local storage
    //const quantity = localStorage.getItem(id);
    // if(quantity){
        
    //     const newQuantity = parseInt(quantity) + 1;
    //     localStorage.setItem(id,newQuantity);
    // }
    // else{
    //     localStorage.setItem(id, 1);
    // }
    
}




const removeFromDB = (id) => {
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){ //shopping cart er moddhe id ta thakle 
        delete shoppingCart[id]; // object theke delete korbe jodi thake 
        
         localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
        }
    }
}

//array reduce
    const numbers = [10, 20, 30, 40, 50];
    const sumReducer = (previous, current) => previous +  current;
    const total = numbers.reduce(sumReducer,0);
//object er moddhe price er opor reducer use kora

const items = [
    {id: 1, name: 'alta', price: 100},
    {id: 1, name: 'alta', price: 100},
    {id: 1, name: 'alta', price: 100},
    {id: 1, name: 'alta', price: 100}
]

const itemSumREducer = (previous, current) => previous + current.price;
const itemSumTotal = items.reduce(itemSumREducer, 0);


//reduce function get total price function
const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}

export {addToDB,removeFromDB, getTotalPrice as getTotal};

