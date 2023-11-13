const bottle = {
    color: 'Yellow',
    hold: 'Water',
    price: 50,
    isCleaned: true
};

for(const property in bottle){
    console.log(property, bottle[property]);
}

//acess object using for of loop
const keys = Object.keys(bottle);
for(const property of keys){
    console.log(bottle[property]);
}

//loop on object uisng entries
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}