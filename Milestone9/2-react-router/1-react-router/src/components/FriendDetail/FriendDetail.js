import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
    const {friendsID} = useParams(); //dynamically firnds er id pwar jonno
    const [frined, setFriend] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendsID}`)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    return (
      <div>
        <h1>Detail About friends</h1>
        <h2>Name: {frined.name}</h2>
        <h3>Email: {frined.email}</h3>
        <h4>Website: {frined.website}</h4>
        <small>City: {frined?.address?.city}</small>
      </div>
    );
}
export default FriendDetail;