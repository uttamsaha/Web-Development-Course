import React, { useEffect, useState } from "react";
import Friend from "../SingleFriend/Friend";

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
  return (
    <div>
      <h2>This is Friends</h2>
      <p>
        <small>Total Friends : {friends.length}</small>
      </p>
      {
          friends.map(friend => <Friend key={friend.id}
          friend={friend}></Friend>)
      }
    </div>
  );
};
export default Friends;
