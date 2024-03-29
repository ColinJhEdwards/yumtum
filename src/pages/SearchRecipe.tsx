import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fade, pageAnimation } from "../animations";
import NoResultMessage from "../components/NoResultMessage";
import RecipeCard from "../components/RecipeCard";

// creating an interface for expected results from api call
interface RecipeInfo {
  id: number;
  image: string;
  title: string;
}

function SearchRecipe() {
  // using react-router hook useParams to grab value of search value to perform api call.
  // value is found in App.tsx route section to={/search/:value}
  const { value } = useParams<{ value: string | undefined }>();
  // accessing api key stored in dot env file
  const apiKey = process.env.REACT_APP_APIKEY;
  // useState for storing recipes with typescript interface
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
  }, [value]);

  return (
    <StyledRecipes
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="title">
        <h1>{value} Recipes</h1>
      </div>
      <motion.div variants={fade} className="content">
        {recipes.length > 0 ? (
          recipes.map((rec) => (
            <RecipeCard
              key={rec.id}
              id={rec.id}
              image={rec.image}
              title={rec.title}
            />
          ))
        ) : (
          <NoResultMessage searchValue={value} />
        )}
      </motion.div>
    </StyledRecipes>
  );
}

const StyledRecipes = styled(motion.section)`
  .title {
    display: flex;
    justify-content: center;
    margin: 3rem 0rem;
  }
  .content {
    min-height: 60vh;
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
`;

export default SearchRecipe;
