import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import RecipeCard from "./RecipeCard";

interface RecipeInfo {
  id: number;
  image: string;
  title: string;
}

function SearchRecipe() {
  const apiKey = process.env.REACT_APP_APIKEY;
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState<RecipeInfo[]>([]);

  const recipeSearch = async (searchValue: string): Promise<RecipeInfo[]> => {
    const results = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchValue}&number=10`
    );
    return (await results.json()).results;
  };

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
      background: #c2c2c2;
    }
    button {
      padding: 1rem;
      background: orange;
      border: none;
      border-radius: 5px;
      transition: all ease 0.3s;
      font-size: 1.2rem;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export default SearchRecipe;
