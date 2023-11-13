import React from "react";
import useReviews from "../../CustomHooks/useReviews";
import SingleReview from "../singleReview/SingleReview";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [reviews, setReviews] = useReviews(true);
  const navigate = useNavigate();

  const seeAllReviews = () => {
    navigate("/reviews");
  };
  return (
    <div className="home-container">
      <div className="home">
        <div className="home-content">
          <h1>
            <span className="title-first">Welcome To Our,</span>
            <br />
            <span className="title">Car Shop BD </span>
          </h1>
          <p className="home-details">
            Car Shop BD is the best online car selling company. Here you will
            get all kinds of cars. You can also take car rent from here. Load
            service is available for buy cars. Please buy your favourite car
            from here. Thank you so much.
          </p>
          <button>
            Live Demo{" "}
            <FontAwesomeIcon
              className="fa-icon"
              icon={faArrowCircleRight}
            ></FontAwesomeIcon>
          </button>
        </div>
        <div>
          <img src="car1.png" alt="" />
        </div>
      </div>
      <div className="customer-review">
        <h1 className="customer-review-title">Customer Reviews(3)</h1>
        <div className="review-container">
          <div className="reviews">
            {reviews.map((review) => (
              <SingleReview review={review} key={review.id}></SingleReview>
            ))}
          </div>
        </div>
        <button onClick={seeAllReviews} className="all-reviews-btn">
          See All Reviews{" "}
          <FontAwesomeIcon
            className="fa-icon"
            icon={faArrowCircleRight}
          ></FontAwesomeIcon>{" "}
        </button>
      </div>
    </div>
  );
};
export default Home;
