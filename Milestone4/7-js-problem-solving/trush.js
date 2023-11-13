function oddFriend(friends) {
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