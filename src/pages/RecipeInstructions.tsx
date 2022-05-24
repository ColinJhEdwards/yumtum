import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import parse from "html-react-parser";
import { GiChefToque, GiFoldedPaper } from "react-icons/gi";
import { BiTimer } from "react-icons/bi";

interface RecipeInfo {
  id: number;
  title: string;
  readyInMinutes: number;
  sourceUrl: string;
  image: string;
  summary: string;
  instructions: string;
  creditsText: string;
  extendedIngredients: [{ original: string }];
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
      <div className="line"></div>
      <div className="imageAndSummary">
        <img src={recipes?.image} alt={recipes?.title} />
        {parse(`<p>${recipes?.summary}</p>`)}
      </div>
      <div className="stats">
        <div className="wrapper">
          <BiTimer />
          <p>Ready in: {recipes?.readyInMinutes} Minutes</p>
        </div>
        <div className="wrapper">
          <GiChefToque />
          <p>Recipe by: {recipes?.creditsText || "N/A"}</p>
        </div>
        <div className="wrapper">
          <GiFoldedPaper />
          <p>
            <a href={recipes?.sourceUrl} target="_blank">
              Recipe Source
            </a>
          </p>
        </div>
      </div>
      <div className="text">
        <div className="ingredients">
          {recipes?.extendedIngredients.map((i) => (
            <p>{i.original}</p>
          ))}
        </div>
      </div>
    </StyledRecipe>
  );
}

const StyledRecipe = styled.div`
  min-height: 60vh;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .title {
    margin: 5rem 0rem 2rem 0rem;
    h2 {
      font-size: 2.5rem;
    }
  }
  .line {
    background: orange;
    width: 80%;
    height: 2px;
    border-radius: 50%;
    margin: 2rem 0rem;
  }
  .imageAndSummary {
    display: flex;
    justify-content: space-between;
    img {
      filter: saturate(130%);
    }
    p {
      width: 50%;
      margin: auto;
      line-height: 35px;
    }
  }
  .stats {
    display: flex;
    justify-content: space-around;
    margin: 4rem 0rem;
    width: 70%;
    .wrapper {
      display: flex;
      align-items: center;
      svg {
        font-size: 2rem;
        color: orange;
      }
      p {
        margin-left: 0.5rem;
      }
    }
  }
`;

export default RecipeInstructions;
