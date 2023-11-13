import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
    const {postID} = useParams();
    const [post, setPost] = useState({});
    const url = `https://jsonplaceholder.typicode.com/posts/${postID}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[postID])
    return (
        <div>
            <h4>This is post details: {postID}</h4>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </div>
    )
}
export default PostDetail;