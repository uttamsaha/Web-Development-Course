import { useEffect, useState } from "react";

const useReviews = (count) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        if(count){
          setReviews(data.slice(0, 3));
        }
        else{
          setReviews(data);
        }
      });
  }, [count]);
  return [reviews, setReviews];
};
export default useReviews;
