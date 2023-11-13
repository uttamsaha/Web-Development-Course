import React from "react";
import { useNavigate } from "react-router-dom";

const Friend = (props) => {
    const {name, username, id} = props.friend;
    const navigate = useNavigate(); //for creating dynamic path
    const showFriendDetails = () => {
        const path = `/friends/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <button onClick={showFriendDetails}>{username}: {id}</button>
        </div>
    )
}
export default Friend;