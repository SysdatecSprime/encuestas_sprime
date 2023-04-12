import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { FaStar } from "react-icons/fa";

const EstrellasCalificacion = ({ onChange }) => {
  const [rating, setRating] = useState(null);
  const [hoverRating, setHoverRating] = useState(null);

  return (
    <>
      {[...Array(10)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label className="labelStar">
            <input
              className="radioStar"
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
                onChange(ratingValue);
              }}
            />
            <FaStar
              className="star mx-3"
              color={
                ratingValue <= (hoverRating || rating) ? "#ffc107" : "#e4e5e9"
              }
              size={50}
              onMouseEnter={() => setHoverRating(ratingValue)}
              onMouseLeave={() => setHoverRating(null)}
            />
          </label>
        );
      })}
    </>
  );
};
export default EstrellasCalificacion;
