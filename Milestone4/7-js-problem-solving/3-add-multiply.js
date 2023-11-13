/*
chair = 3cft/chair
table = 10cft/table
bed = 50cft/bed
calculate total wood
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * chairQuantity;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const chair = 2;
const table = 5;
const bed = 3;

const totalwood = woodCalculator(chair, table, bed);
console.log("Total wood = ",totalwood);