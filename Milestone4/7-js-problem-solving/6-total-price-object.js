const products = [
    {name: 'laptop', price: 43000},
    {name: 'shirt', price:500},
    {name: 'watch', price:3600},
    {name: 'phone', price:55000}
];

let totalPrice = 0;
for(const product of products) {
    totalPrice = totalPrice + product.price;
}
console.log('Total price: ',totalPrice);