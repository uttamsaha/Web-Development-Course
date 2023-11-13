const product = [
    {name: 'water bottle', price: 50, color:'yellow'},
    {name: 'Mobile Phone', price: 1550, color:'white'},
    {name: 'Smart Watch', price: 550, color:'black'}
]

const whiteItem = product.find(product => product.color == 'white');
console.log(whiteItem);