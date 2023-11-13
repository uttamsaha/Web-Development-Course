//Find the cheapest phone

const phones = [
    {
        name:'samsung s8',
        price: 45000,
        camera: 10,
        storage: 32
    },
    {
        name:'walton m32',
        price:10000,
        camera:5,
        stroage:15
    },
    {
        name:'walton m11',
        price:8000,
        camera:5,
        stroage:15
    },
    {
        name:'Iphone',
        price:1000000,
        camera:5,
        stroage:15
    }

];

let cheapest = phones[0];
for(const phone of phones) {
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log('Cheapest phone: ',cheapest);