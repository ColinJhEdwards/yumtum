import React, { useEffect, useState } from "react";
import styled from "styled-components";
// using splide library to create slider effect
import { Splide, SplideSlide } from "@splidejs/react-splide";

interface RandomRec {
  id: number;
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
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=15`
    );
    return (await results.json()).recipes;
  };

  useEffect(() => {
    const setData = async () => {
      const data = await randomSearch();
      setRecipes(data);
    };
    setData();
  }, []);

  console.log(recipes);

  return (
    <StyledRandoms>
      {recipes.map((r) => (
        <div className="randomcards" key={r.id}>
          <img src={r.image} alt={r.title} />
          <h2>{r.title}</h2>
        </div>
      ))}
    </StyledRandoms>
  );
};

const StyledRandoms = styled.div`
  display: flex;
  overflow-x: scroll;
`;

export default RandomRecipes;
