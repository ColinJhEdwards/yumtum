import React, { useState, useEffect, FormEvent } from "react";
import { useParams } from "react-router-dom";
// import RecipeCard from "./RecipeCard";

// creating an interface for expected results from api call
interface RecipeInfo {
  id: number;
  image: string;
  title: string;
}

function SearchRecipe() {
  // using react-router hook useParams to grab value of search value to perform api call.
  const { value } = useParams<{ value: string | undefined }>();
  // accessing api key stored in dot env file
  const apiKey = process.env.REACT_APP_APIKEY;
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState<RecipeInfo[]>([]);

  // creating an async function to perform a fetch using api url. Also assigning a function type of Promise that will
  // return the data that matches the interface created above
  const recipeSearch = async (
    searchValue: string | undefined
  ): Promise<RecipeInfo[]> => {
    const results = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchValue}&number=15`
    );
    return (await results.json()).results;
  };

  useEffect(() => {
    const setData = async () => {
      const data = await recipeSearch(value);
      setRecipes(data);
    };
    setData();
  }, []);

  console.log(recipes);

  return (
    <div>
      <h2>TEST</h2>
      {/* <div className="content">
        {recipes.map((rec) => (
          <RecipeCard
            key={rec.id}
            id={rec.id}
            image={rec.image}
            title={rec.title}
          />
        ))}
      </div> */}
    </div>
  );
}

// .content {
//     min-height: 100vh;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-around;
//     align-items: center;
//   }

export default SearchRecipe;
