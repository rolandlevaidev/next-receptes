import Image from "next/image";
import Clock from "./Clock";
import Fire from "./Fire";
import Scale from "./Scale";

function Recipe({ recipe }) {
  if (!recipe) {
    return (
      <h1 className="text-2xl font-bold text-center">
        Please choose a recipe...
      </h1>
    );
  }
  return (
    <>
      <div className="container mx-8">
        <div className="relative w-96 h-64 mx-auto">
          <Image
            layout="fill"
            className="object-cover w-full h-full"
            src={recipe.imgSrc}
            alt={recipe.title}
          />
          <h2 className="absolute bottom-2 left-4 text-center font-extrabold text-4xl mb-5">
            {recipe.title}
          </h2>
        </div>
        <div className="flex flex-row justify-around">
          <div className="flex flex-row items-center">
            <Clock />
            <p>{recipe.time} mins</p>
          </div>
          <Scale
            rating={recipe.rating}
            max={5}
            fullIcon={() => <Fire isFull />}
            emptyIcon={() => <Fire isFull={false} />}
          />
        </div>
      </div>

      <div className="container flex justify-center mx-auto">
        <div className="w-1/3 mx-10">
          <h3 className="text-lg font-semibold mb-5">
            Ingredients for <strong>{recipe.serving}</strong>
          </h3>
          <ul>
            {recipe.ingredientsList.map((ingredient) => (
              <li key={ingredient.trim().toLowerCase()}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="w-2/3 mx-10">
          <h3 className="text-lg font-semibold mb-5">Preparation</h3>
          <p>{recipe.description}</p>
        </div>
      </div>
    </>
  );
}

export default Recipe;
