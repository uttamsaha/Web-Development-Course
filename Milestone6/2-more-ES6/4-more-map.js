//ekta array er moddhe j string gula ache tader length koto seta niye arekta array banao.
friends = ['Tob Hanks', 'Tom Cruise', 'Tom Solaiman'];

const friendsLength = friends.map(friend => friend.length)
console.log(friendsLength);


//prottek ta product er nam ekta array te copy korbo.
const product = [
    {name: 'water bottle', price: 50, color:'yellow'},
    {name: 'Mobile Phone', price: 1550, color:'white'},
    {name: 'Smart Watch', price: 550, color:'black'}
]

const productNames = product.map(product => product.name);
console.log(productNames);

const products = product.forEach(product => console.log(product));