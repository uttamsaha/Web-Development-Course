function animalCount(miles) {
    var count;
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    if(miles <= 10) {
        count = miles * animalDensityFirst10Miles;
        return count;   
    }
    else if(miles >10 && miles<= 20) {
        const first10mile = 10 * animalDensityFirst10Miles;
        const restMiles = (miles - 10) * animalDensitySecond10Miles;
         const totalAnimal = first10mile + restMiles;
         return totalAnimal;
    }
}

const animals = animalCount(17);
console.log(animals);

let sum=0; 
for( let i = 0; i<=3;i++){ 
    sum = sum + i; 
}
console.log(sum);
