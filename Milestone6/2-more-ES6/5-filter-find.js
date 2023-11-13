//-> numbers array er moddhe joto gula element ache sob gula k nibe.  niye check korbe number gula 20 er cye boro kina jodi 20 er cye boro hoi tahole seta k bigNumbers name er array te rakhbe seita return korbe.
const numbers = [5, 13, 7, 41, 29, 70, 79];
const bigNumbers = numbers.filter(number => number > 20);
console.log(bigNumbers);


//#J sob product er price 100 er cye besi tader k onno array te dekhabo. using filter
const product = [
    {name: 'water bottle', price: 50, color:'yellow'},
    {name: 'Mobile Phone', price: 1550, color:'white'},
    {name: 'Smart Watch', price: 550, color:'black'}
]
const expensive = product.filter(product => product.price > 100);
console.log(expensive);

//jesob product er color black tader k dekhabo
const blacks = product.filter(product => product.color == 'black');
console.log(blacks);