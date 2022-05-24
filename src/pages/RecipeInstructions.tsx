import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

interface RecipeInfo {
  id: number;
  title: string;
  readyInMinutes: number;
  sourceUrl: string;
  image: string;
  summary: string;
  instructions: string;
  creditsText: string;
}

function RecipeInstructions() {
  // using react-router hook useParams to grab value of search value to perform api call.
  // value is found in App.tsx route section to={/recipe/:id}
  const { id } = useParams<{ id: string }>();
  // accessing api key stored in dot env file
  const apiKey = process.env.REACT_APP_APIKEY;
  // useState for storing recipes with typescript interface
  const [recipes, setRecipes] = useState<RecipeInfo>();

  const getRecipeInfo = async (
    recipeId: string | undefined
  ): Promise<RecipeInfo> => {
    const results = await fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`
    );
    return await results.json();
  };

  useEffect(() => {
    const setData = async () => {
      const data = await getRecipeInfo(id);
      setRecipes(data);
    };
    setData();
  }, []);

  console.log(recipes);
  return (
    <StyledRecipe>
      <div className="title">
        <h2>{recipes?.title}</h2>
      </div>
      <div className="imageAndSummary">
        <img src={recipes?.image} alt={recipes?.title} />
        <p>{recipes?.summary}</p>
      </div>
    </StyledRecipe>
  );
}

const StyledRecipe = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default RecipeInstructions;
