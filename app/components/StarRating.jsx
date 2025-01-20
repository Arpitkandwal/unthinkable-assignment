import React, { useState} from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ recipeIndex }) => {
  // Get saved ratings from localStorage for this specific recipe index
  const savedRatings = JSON.parse(localStorage.getItem("ratings")) || {};
  const savedRatingForRecipe = savedRatings[recipeIndex] || 0;

  const [rating, setRating] = useState(savedRatingForRecipe); 
  const [hoveredRating, setHoveredRating] = useState(0); 

  // Handle mouse hover on a star
  const handleMouseEnter = (index) => {
    setHoveredRating(index + 1);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  // Handle click to set the rating
  const handleClick = (index) => {
    const newRating = index + 1;
    setRating(newRating);

    const updatedRatings = { ...savedRatings, [recipeIndex]: newRating };
    localStorage.setItem("ratings", JSON.stringify(updatedRatings));
  };

  return (
    <div className="flex items-center">
      {/* Loop to render stars */}
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar
          key={index}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          className={`cursor-pointer text-3xl ${
            (hoveredRating || rating) > index ? "text-yellow-400" : "text-gray-300"
          } transition duration-200`}
        />
      ))}
      <span className="ml-2 text-xl">{rating ? rating : "Rate"}</span>
    </div>
  );
};

export default StarRating;
