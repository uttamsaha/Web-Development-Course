///search an iteam from array object with name. if the name exsits show this product details. product.name.incudles find the name


const products = [
    {name: 'Iphone 14',price:70000},
    {name: 'Iphone 4',price:50000},
    {name: 'Dell 14',price:90000},
    {name: 'Asus',price:7200},
    {name: ' Apple watch',price:30000},
    {name: 'Xiaomi watch',price:20000}
];

function searchProducts(products, searchText){
    const result = [];
    for(const product of products){
        if(product.name.includes(searchText)){
            result.push(product);
        }
    }
    return result;
}
var search = 'watch';

var match = searchProducts(products, search);
console.log(match);
