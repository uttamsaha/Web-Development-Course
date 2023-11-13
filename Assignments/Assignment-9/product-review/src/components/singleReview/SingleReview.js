import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import React from "react";
import './SingleReview.css'

const SingleReview = (props) => {
    const {name, img, comment, ratings} = props.review;
    
    const rating = [];
    for(let i = 1; i <= ratings; i++){
        rating.push('');
    }
    let remaining = 5 - rating.length;
    const rest = [];
    for(let i = 1; i <= remaining; i++){
        rest.push('');
    }
    return (
      <div className="review">
        <p>{comment}</p>
        <img src={img} alt="" /> <br />
        <h4>{name}</h4>
        <div className="rating-align">
          <span>
            <b>Ratings: </b>
          </span>
          {rating.map((rating) => (
            <AiFillStar className="icons"></AiFillStar>
          ))}
          {rest.map((rest) => (
            <AiOutlineStar className="icons"></AiOutlineStar>
          ))}
        </div>
      </div>
    );
}
export default SingleReview;