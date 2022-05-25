import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import parse from "html-react-parser";
import { GiChefToque, GiFoldedPaper } from "react-icons/gi";
import { BiTimer } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";

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
  servings: number;
}

function RecipeInstructions() {
  // using react-router hook useParams to grab value of search value to perform api call.
  // value is found in App.tsx route section to={/recipe/:id}
  const { id } = useParams<{ id: string }>();
  // accessing api key stored in dot env file
  const apiKey = process.env.REACT_APP_APIKEY;
  // useState for storing recipes with typescript interface
  const [recipes, setRecipes] = useState<RecipeInfo>();
  const [toggle, setToggle] = useState<boolean>(true);

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
          <BsPeopleFill />
          <p>Feeds: {recipes?.servings || "N/A"}</p>
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
      <div className="toggleBtns">
        <button
          onClick={() => setToggle(true)}
          className={toggle === true ? "active" : ""}
        >
          Instructions
        </button>
        <button
          onClick={() => setToggle(false)}
          className={toggle === false ? "active" : ""}
        >
          Ingredients
        </button>
      </div>
      <div className="info">
        {toggle ? (
          <div className="instructions">
            <h2>Instructions</h2>
            {parse(
              `<p>${
                recipes?.instructions ||
                "No instructions available, we apologize for this inconvenience to your tummy."
              }</p>`
            )}
          </div>
        ) : (
          <div className="ingredients">
            <h2>Ingredients</h2>
            {recipes?.extendedIngredients.map((i) => (
              <p key={i.original}>{i.original}</p>
            ))}
          </div>
        )}
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
    text-align: center;
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
    flex-wrap: wrap;
    /* justify-content: space-between; */
    img {
      filter: saturate(130%);
      flex: 1 20rem;
    }
    p {
      /* width: 50%; */
      flex: 2 20rem;
      margin: auto 2rem auto 2rem;
      line-height: 35px;
    }
  }
  .stats {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 4rem 0rem;
    width: 100%;
    .wrapper {
      display: flex;
      align-items: center;
      margin: 2rem;
      svg {
        font-size: 2rem;
        color: orange;
      }
      p {
        margin-left: 0.5rem;
        font-weight: bold;
      }
    }
  }
  .toggleBtns {
    align-self: flex-start;
    button {
      padding: 1rem;
      background: none;
      border: solid 1px orange;

      color: black;
      margin: 1rem 1rem 2rem 0rem;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all ease 0.5s;
      &:hover {
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
      }
    }
    .active {
      background: linear-gradient(35deg, orange, #7c6228);
      border: none;
      color: white;
    }
  }
  .info {
    width: 100%;

    p {
      line-height: 30px;
    }
    li {
      margin: 1rem 0rem;
    }
  }
`;

export default RecipeInstructions;
