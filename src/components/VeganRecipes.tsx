import React, { useEffect, useState } from "react";
import styled from "styled-components";
import placeholder from "../images/placeholder.png";
// using splide library to create slider effect
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

interface VeganRec {
  id: number;
  title: string;
  readyInMinutes: number;
  sourceUrl: string;
  image: string;
  summary: string;
  instructions: string;
}

const VeganRecipes = () => {
  // store apiKey in variable, accessed from dotenv file
  const apiKey = process.env.REACT_APP_APIKEY;
  const [recipes, setRecipes] = useState<VeganRec[]>([]);
  // perform a fetch with url for Veggie recipes, giving function type of promise and inserting interface for results
  const veganSearch = async (): Promise<VeganRec[]> => {
    const results = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&tags=vegan&number=15`
    );
    return (await results.json()).recipes;
  };

  useEffect(() => {
    const setData = async () => {
      const data = await veganSearch();
      setRecipes(data);
    };
    setData();
  }, []);

  console.log(recipes);

  return (
    <StyledRandoms>
      <h2>Vegan Recipes</h2>
      <Splide
        options={{
          perPage: 5,
          arrows: true,
          pagination: true,
          drag: "free",
          gap: "3rem",
        }}
      >
        {recipes.map((r) => (
          <SplideSlide key={r.id}>
            <Card className="vegancards" key={r.id}>
              <img src={r.image || placeholder} alt={r.title} />
              <Gradient />
              <h2>{r.title}</h2>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </StyledRandoms>
  );
};

const StyledRandoms = styled.div`
  margin: 2rem 0rem;
  h2 {
    margin: 2rem 0rem;
  }
`;

const Card = styled.div`
  cursor: grab;
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  &:hover {
    img {
      transform: scale(1.2);
    }
  }
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all ease 0.5s;
  }
  h2 {
    width: 100%;
    position: absolute;
    z-index: 10;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    bottom: 20%;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5));
`;

export default VeganRecipes;
