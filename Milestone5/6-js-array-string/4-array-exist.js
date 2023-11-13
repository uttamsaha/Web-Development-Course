//sob cye boro nam er friend return korbe.
function megaFriend(friends){
    if(Array.isArray(friends)== false){
        return 'Please provide an array';
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}

const friends = ['kutub', 'Lion', 'akkkash', 'sabbir'];
const myBuddy = megaFriend(friends);
console.log(myBuddy);

//Friends er moddhe Lion ache kina seta check korte
if(friends.indexOf('Lion') != -1){
    console.log('lion exist');
}

//another way to check array er moddhe kono kichu ase kina
if(friends.includes('Lion') == true){
    console.log('Lion exist');
}

//concat
const first = [1,3,5];
const second = [7,8,9];
const concat = first.concat(second);
console.log(concat);

