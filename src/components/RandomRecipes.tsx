import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import RecipeCard from "./RecipeCard";

interface RandomRec {
  id: string;
  title: string;
  readyInMinutes: number;
  sourceUrl: string;
  image: string;
  summary: string;
  instructions: string;
}

const RandomRecipes = () => {
  // store apiKey in variable, accessed from dotenv file
  const apiKey = process.env.REACT_APP_APIKEY;
  const [recipes, setRecipes] = useState<RandomRec[]>([]);
  // perform a fetch with url for random recipes, giving function type of promise and inserting interface for results
  const randomSearch = async (): Promise<RandomRec[]> => {
    const results = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`
    );
    return (await results.json()).results;
  };

  useEffect(() => {
    async () => {
      const data = await randomSearch();
      setRecipes(data);
    };
  }, []);

  return <div></div>;
};

export default RandomRecipes;
