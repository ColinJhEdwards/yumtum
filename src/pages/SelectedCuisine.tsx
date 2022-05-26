import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import RecipeCard from "../components/RecipeCard";
import { motion } from "framer-motion";
import { fade, pageAnimation } from "../animations";

interface RecipeInfo {
  id: number;
  image: string;
  title: string;
}

function SelectedCuisine() {
  // when a cuisine option is clicked users will be directed to url with that cuisine EX. /cuisine/american
  // useParams will grab that value which will then be used for the api call
  const { value } = useParams<{ value: string | undefined }>();
  const apiKey = process.env.REACT_APP_APIKEY;
  const [recipes, setRecipes] = useState<RecipeInfo[]>([]);

  const cuisineSearch = async (
    searchValue: string | undefined
  ): Promise<RecipeInfo[]> => {
    const results = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${searchValue}&number=15`
    );
    return (await results.json()).results;
  };

  useEffect(() => {
    const setData = async () => {
      const data = await cuisineSearch(value);
      setRecipes(data);
    };
    setData();
  }, [value]);

  console.log(recipes);
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
        {recipes.map((rec) => (
          <RecipeCard
            key={rec.id}
            id={rec.id}
            image={rec.image}
            title={rec.title}
          />
        ))}
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

export default SelectedCuisine;
