import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import RecipeCard from "./RecipeCard";

// creating an interface for expected results from api call
interface RecipeInfo {
  id: number;
  image: string;
  title: string;
}

function SearchRecipe() {
  // accessing api key stored in dot env file
  const apiKey = process.env.REACT_APP_APIKEY;
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState<RecipeInfo[]>([]);

  // creating an async function to perform a fetch using api url. Also assigning a function type of Promise that will
  // return the data that matches the interface created above
  const recipeSearch = async (searchValue: string): Promise<RecipeInfo[]> => {
    const results = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchValue}&number=10`
    );
    return (await results.json()).results;
  };

  // this function will run when the search button is clicked
  const searchHandler = async () => {
    const data = await recipeSearch(search);
    setRecipes(data);
  };

  console.log(recipes);

  return (
    <StyledSearch className="searchSection">
      <div className="input">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => searchHandler()}>
          <BiSearchAlt />
        </button>
      </div>
      <div className="content">
        {recipes.map((rec) => (
          <RecipeCard
            key={rec.id}
            id={rec.id}
            image={rec.image}
            title={rec.title}
          />
        ))}
      </div>
    </StyledSearch>
  );
}

const StyledSearch = styled.section`
  min-height: 90vh;
  width: 90%;
  margin: auto;
  .input {
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      font-size: 1.5rem;
      border-radius: 5px;
      border: none;
      margin: 2rem 1rem;
      padding: 1rem;
      border: orange solid 2.5px;
    }
    button {
      padding: 1rem;
      background: linear-gradient(35deg, orange, #815502);
      border: none;
      border-radius: 5px;
      transition: all ease 0.3s;
      font-size: 1.2rem;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
        color: white;
      }
    }
  }
  .content {
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /* grid-template-columns: repeat(autofit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 3rem; */
  }
`;

export default SearchRecipe;
