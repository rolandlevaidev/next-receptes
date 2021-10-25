import React from "react";

const RecipeSwitcher = ({ mealList, chosenRecipe, changeRecipe }) => {
  return (
    <div className="container mx-auto">
      <select
        className="block w-1/2 mx-auto my-10 text-xl text-center font-medium border-b-2 border-pink-600"
        value={chosenRecipe}
        onChange={changeRecipe}
      >
        <option>Choose a recipe</option>
        {Object.keys(mealList).map((meal) => (
          <option key={meal} value={meal}>
            {mealList[meal]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RecipeSwitcher;
