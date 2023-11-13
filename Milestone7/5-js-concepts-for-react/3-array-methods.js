//array of object
const products = [
    {name: 'laptop', price:32000, brand:'lenovo', color:'silver' },
    {name: 'phone', price:7000, brand:'Iphone', color:'silver' },
    {name: 'Watch', price:3000, brand:"casio", color:'golden' },
    {name: 'Sunglass', price:300, brand:'ribon', color:'black' },
    {name: 'Camera', price:9000, brand:'Canon', color:'silver' }
];

// //brand er nam gula niye notun ekta array banabo..
// let array = [];

// for(let i = 0; i <products.length; i++){
//     array[i] = products[i].brand;
// }
// console.log(array);

const brands = products.map(product => product.brand);
console.log(brands);

products.forEach(product => {

})

//filter 
//j sob prodcut er pirce <=5000
const cheap = products.filter(product => product.price <= 5000);

//j sob product er moddhe name e n ache tader k daw
const nProduct = products.filter(product => product.name.includes('n'));
console.log(nProduct);

const special = products.find(product => product.name.includes('n'));
console.log(special);