"use client"
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FaStar } from "react-icons/fa";

const page = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [starRating, setStarRating] = useState(0); 

  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    const ratings = parseInt(localStorage.getItem("rating")) || 0;
    
    setStarRating(ratings); 
    setSavedRecipes(recipes); 
  }, []);

 
  const removeRecipes = (index) => {
    const updatedRecipes = savedRecipes.filter((_, i) => i !== index); 
    localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes)); 
    setSavedRecipes(updatedRecipes); 
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <h1 className="flex mt-10 text-3xl justify-center items-center bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent dark:from-yellow-400 dark:via-green-400 dark:to-blue-400 animate-fadeIn">
          My Recipe's
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 mt-6 animate-fadeInLate">
          {savedRecipes.map((recipe, index) => (
            <div key={index} className="border rounded-lg shadow-lg p-4 bg-gray-100 dark:bg-gray-800 dark:text-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-lg">Recipe {index + 1}</h2>
                <button className="bg-red-600 rounded px-4 py-1 ml-4 text-xl" onClick={() => removeRecipes(index)}>
                  X
                </button>
              </div>
              <p className="text-sm mb-3">{recipe}</p>

              <div className="flex items-center">
                {/* Loop to render stars with saved rating */}
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={`cursor-pointer text-3xl ${i < starRating ? "text-yellow-400" : "text-gray-300"} transition duration-200`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
