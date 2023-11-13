const cart = [
    {name: 'laptop', price: 43000,quantity:1},
    {name: 'shirt', price:500, quantity:2},
    {name: 'watch', price:3600, quantity:3},
    {name: 'phone', price:55000, quantity:1}
];

let cartTotal = 0;
for(const product of cart) {
    cartTotal = cartTotal + product.price * product.quantity;
}
console.log('Total price: ',cartTotal);