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

interface apiResults {
  config: {};
  data: {};
  headers: {};
  request: {};
  status: number;
  statusText: string;
}

const RandomRecipes = () => {
  // store apiKey in variable, accessed from dotenv file
  const apiKey = process.env.REACT_APP_APIKEY;
  const [recipes, setRecipes] = useState<apiResults[]>([]);
  //   perform a fetch using axios.get with url for random recipes, insert interface for results
  const randomSearch = async () => {
    const results = await axios.get<apiResults[]>(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`
    );
    setRecipes(results.data);
  };
  console.log(recipes);

  useEffect(() => {
    randomSearch();
  }, []);

  return <div></div>;
};

export default RandomRecipes;
