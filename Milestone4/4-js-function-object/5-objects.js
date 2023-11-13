var computer = {
    price: 2900,
    storage: '15 GB',
    color: 'silver'
}

//print object
console.log(computer);

console.log("Price",computer['price']);
console.log("color",computer.color);
var storages = computer.storage;
console.log("Storage: ",storages);

// //set object property
// computer.price = 20000;
// console.log("Updated Price:",computer.price);

///Differecne way to set object property;
computer["price"] = 23000;
console.log("updated price:",computer.price);

//3rd way to set object value
var storageProperty = "storage";
computer[storageProperty] = '500GB';
console.log(computer.storage);