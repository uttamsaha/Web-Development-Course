//JavaScript Object
const user = {id:11, name:'Gorib Amir', job:'Actor'};

//convert JS object o JSON
const stringified = JSON.stringify(user);
console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir Road',
    products: ['Laptop', 'Mobile', 'Pepsi'],
    owner: {
        name:'Alia Bhatt',
        profession: 'Acotr'
    },
    isExpensive: false

}

const shopStringified = JSON.stringify(shop);
console.log(shopStringified);

const convertJSONtoOBject = JSON.parse(shopStringified);
console.log(convertJSONtoOBject);