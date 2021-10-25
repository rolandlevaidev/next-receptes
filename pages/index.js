import { useState } from "react";
import Head from "next/head";
import Recipe from "../components/Recipe";
import RecipeSwitcher from "../components/recipeSwitcher";
import RecipeList from "../assets/recipeList.json";
import mealList from "../assets/mealList.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const [chosenRecipe, setChosenRecipe] = useState("");

  const changeRecipe = (event) => setChosenRecipe(event.target.value);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <RecipeSwitcher
          chosenRecipe={chosenRecipe}
          changeRecipe={changeRecipe}
          mealList={mealList}
        />
        <Recipe recipe={RecipeList[chosenRecipe]} />
        <Footer />
      </main>
    </>
  );
}
