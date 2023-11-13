const products = [
    'Dell hardcore i29 200GB laptop',
    'Iphone 1TB camera flashlight Phone',
    'Yellow laptop with back camera',
    '1X59 Lenovo commericial yoga Laptop',
    'HTC low price phone',
    'Loc supernova phone',
    'Purple color phone with laptop'
];

const searching = 'laptop';
const output = [];
// for(const product of products){
//     if(product.toLocaleLowerCase().indexOf(searching.toLowerCase()) != -1){
//         output.push(product);
//     }
// }
// console.log(output);


for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        output.push(product);
    }
}
console.log(output);


//starsWith
//endsWith

