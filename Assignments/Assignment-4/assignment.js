//problem-1 ana to vori
function anaToVori(ana){
    if(typeof ana != 'number'){
        return 'Please enter a number';
    }
    if(ana < 0){
        return 'Please enter any positive number';
    }
    var vori = ana / 16;
    return vori;
}
var myVori = anaToVori(32);
console.log(myVori);

//problem-2 PandaCost
function pandaCost(singaraQuantity, somucaQuantity, jilapiQuantity){
    if(singaraQuantity < 0 || somucaQuantity < 0 || jilapiQuantity < 0){
        return 'Please enter valid number.';
    }
    if(typeof singaraQuantity!= 'number' || typeof somucaQuantity != 'number' || typeof jilapiQuantity != 'number'){
        return 'Please enter valid number.';
    }
    singaraPrice = 7;
    somucaPrice = 10;
    jilapiPrice = 15;

    var totalPrice = (singaraQuantity * singaraPrice) + (somucaQuantity * somucaPrice) + (jilapiQuantity * jilapiPrice);
    return totalPrice;
}

var myOrder = pandaCost(5,6,3);
console.log(myOrder);

//problem-3 picnic budget calculator
function picnicBudget(totalPeople){
    if(typeof totalPeople != 'number' || totalPeople < 0){
        return 'This parameter is not acceptable.'
    }
    var first100PeoplesCost = 5000;
    var second100PeoplesCost = 4000;
    var totalCost = 0;
    var totalCostOfFirst100People;
    var totalCostOfSecond100Peoples;
    var restPeoplesCost;

    if(totalPeople <= 100){
        totalCost = first100PeoplesCost * totalPeople;
        return totalCost;
    }
    else if(totalPeople > 100 && totalPeople <= 200){
        totalCostOfFirst100People = first100PeoplesCost * 100;
        restPeoplesCost = (totalPeople - 100) * second100PeoplesCost;
        totalCost = totalCostOfFirst100People + restPeoplesCost;
        return totalCost;
    }
    else{
        totalCostOfFirst100People = first100PeoplesCost * 100;
        totalCostOfSecond100Peoples = second100PeoplesCost * 100;
        restPeoplesCost = (totalPeople - 200) * 3000;
        totalCost = totalCostOfFirst100People + totalCostOfSecond100Peoples + restPeoplesCost;
        return totalCost;
    }
}

var totalPicnicCost = picnicBudget(250);
console.log(totalPicnicCost);

//problem-4
function oddFriend(friends) {
    if(Array.isArray(friends) != true){
        return 'Your input must be an array.';
    }
    for(const friend of friends) {
        length = friend.length;
        if(length%2 != 0){
            return friend;
        }
    }
    return 'There is no odd length of your friends name';
}
var myFriends = ['Luna', 'Sahkib', 'Akib', 'Jolil','Komol','Oggy'];
var friend = oddFriend(myFriends);
console.log(friend);