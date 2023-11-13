const numbers = [4,7,1,3,2,5];

const sortedNumbers = numbers.sort();
console.log(sortedNumbers);

const friends = ['kabli','babli','kapila','lony','bony'];
const sortedFriends = friends.sort();
console.log(sortedFriends);


//reverse
const friends2 = ['kabli','babli','kapila','lony','bony'];
const friendReverse = friends2.reverse();
console.log(friendReverse);


//number sort
const bigNumbers = [55, 66, 99, 88, 75, 78, 90, 75, 88, 95, 75, 1, 465, 102, 11, 3];

const sortedBigNumbers = bigNumbers.sort(function (a, b){
    return a - b;
})
console.log(sortedBigNumbers);