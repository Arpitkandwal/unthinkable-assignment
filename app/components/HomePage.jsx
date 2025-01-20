"use client"
import React, { useState } from "react";
import Navbar from "./Navbar";
import { MdOutlineSaveAlt } from "react-icons/md";
import Loading from "./Loading";
import StarRating from "./StarRating";

const HomePage = () => {
  const [prompt, setPrompt] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [images, setImage] = useState([]);
  const [category, setCategory] = useState("Vegan");
  const [difficulty, setDifficulty] = useState("Easy");
  const [timing, setTiming] = useState("15");
  const [savedStates, setSavedStates] = useState([]); 
  const [loading, setLoading] = useState(false);
  
  // Handle image removal
  const removeImage = (index) => {
    setImage((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    setImage((prevImages) => [...prevImages, ...Array.from(files)]);
  };

  const generateRecipe = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
          category: category,
          difficulty: difficulty,
          timing: timing,
          image: images,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const recipesArray = data.recipe.split("|||").map((recipe) => recipe.trim());
        setRecipes(recipesArray);
        setSavedStates(new Array(recipesArray.length).fill(false));
        setLoading(false); 
        setImage([]);
        document.getElementById("recipeSection").scrollIntoView({
          behavior: "smooth",
        });
      } else {
        console.error("Failed to generate recipe");
        setLoading(false); 
      }
    } catch (error) {
      console.error("Error", error);
      setLoading(false); 
    }
  };

  const handleSave = (index, recipe) => {
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    
    if (!savedRecipes.includes(recipe)) {
      savedRecipes.push(recipe);
      localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));

      setSavedStates((prevStates) => {
        const updatedStates = [...prevStates];
        updatedStates[index] = true;
        return updatedStates;
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />

      {loading && <Loading />}

      <h1 className="flex mt-10 text-3xl justify-center items-center bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent dark:from-yellow-400 dark:via-green-400 dark:to-blue-400 animate-fadeIn">
        GENERATE EASY RECIPES IN JUST ONE CLICK!
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center mt-10 px-10 space-y-6 lg:space-y-0 lg:space-x-10">
        {/* Left Section */}
        <div className="flex flex-col space-y-6 animate-fadeInLate">
          <div className="flex flex-col items-start w-80">
            <label className="text-black dark:text-white mb-2">1) Please Enter Ingredients:</label>
            <input
              className="border border-black px-6 py-2 w-full dark:border-white dark:bg-gray-800 dark:text-white"
              type="text"
              placeholder="Enter Ingredients"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          <div className="flex flex-col items-start w-80">
            <label className="text-black dark:text-white mb-2">2) Select a category:</label>
            <select
            className="border border-black px-4 py-2 w-full dark:border-white dark:bg-gray-800 dark:text-white"
            onClick={(e) => setCategory(e.target.value)}
            >
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="nonVegetarian">Non-Vegetarian</option>
            </select>
          </div>

          <div className="flex flex-col items-start w-80">
            <label className="text-black dark:text-white mb-2">3) Select Difficulty:</label>
            <select
            className="border border-black px-4 py-2 w-full dark:border-white dark:bg-gray-800 dark:text-white"
            onClick={(e) => setDifficulty(e.target.value)}
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div className="flex flex-col items-start w-80">
            <label className="text-black dark:text-white mb-2">4) Select Cooking Time:</label>
            <select 
            className="border border-black px-4 py-2 w-full dark:border-white dark:bg-gray-800 dark:text-white"
            onClick={(e) => setTiming(e.target.value)}
            >
              <option value="15min">15 min</option>
              <option value="30min">30 min</option>
              <option value="45min">45 min +</option>
            </select>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-6 items-center animate-fadeInLate">
          <div className="flex flex-col items-center w-80">
            <label className="text-black dark:text-white mb-4 text-lg">Upload Images (Optional):</label>
            <div className="relative w-full h-60 border-2 border-dashed border-gray-400 rounded-lg flex justify-center items-center">
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleImageUpload}
                multiple  // Allow multiple files
              />
              <div className="text-center">
                <div className="text-gray-500 dark:text-gray-300 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 mx-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5v-9m-6 6 6-6 6 6M19.5 19.5h-15"
                    />
                  </svg>
                </div>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Choose Files
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={generateRecipe}
            className="border rounded px-6 py-2 bg-red-300 dark:bg-red-500 mt-4"
          >
            Generate Recipe
          </button>
        </div>
      </div>

      {/* Display uploaded images */}
      <div className="flex flex-wrap justify-center mt-4">
  {images.map((img, index) => (
    <div key={index} className="w-40 h-40 mx-2 mb-4 relative">
      <img
        src={URL.createObjectURL(img)}
        className="w-full h-full object-cover rounded-lg border border-gray-300"
        alt={`Uploaded Image ${index + 1}`}
      />
      {/* Button fixed to the rightmost corner */}
      <button
        className="absolute top-0 right-0 bg-red-600 rounded-full px-2 py-1 text-white"
        onClick={() => removeImage(index)}
        title="Remove Image"
      >
        X
      </button>
    </div>
  ))}
</div>



      {/* Display Recipes */}
      <div id="recipeSection" className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 mt-6">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-4 bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
          >
            <h2 className="font-bold text-lg mb-2">Recipe {index + 1}</h2>
            <p className="text-sm mb-4">{recipe}</p>

            {/* Save Button */}
            {savedStates[index] ? (
              <button className="bg-blue-500 py-2 px-6 border rounded text-white mb-2">
                <div className="flex">
                  <img src="/jims.png" alt="saved" className="w-8 h-8 mr-1" />
                  <h3 className="text-black underline">Saved</h3>
                </div> 
              </button>
            ) : (
              <button
                className="bg-blue-500 py-2 px-6 border rounded text-white mb-2"
                onClick={() => handleSave(index, recipe)} 
              >
                <MdOutlineSaveAlt className="inline-block mr-2" />
                Save
              </button>
            )}
            <StarRating recipeIndex={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
