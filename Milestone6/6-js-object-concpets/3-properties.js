const bottle = {
    color: 'Yellow',
    hold: 'Water',
    price: 50,
    isCleaned: true
};
//getting all property names
const keys = Object.keys(bottle);
console.log(keys);

//get all values
const values = Object.values(bottle);
console.log(values);

//get object's pairs
const pairs = Object.entries(bottle);
console.log(pairs);

//#Seal object prevent delete object’s property but can be changed object property’s value
Object.seal(bottle);

//delete object property
delete bottle.isCleaned;
console.log(bottle);

//freeze object
Object.freeze(bottle);
