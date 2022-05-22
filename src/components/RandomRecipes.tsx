import React, { useEffect, useState } from "react";
import styled from "styled-components";
import placeholder from "../images/placeholder.png";
// using splide library to create slider effect
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

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

  return (
    <StyledRandoms>
      <div className="text">
        <h2>Popular Recipes</h2>
        <p id="bottom">
          Why not try out one of these popular recipes, freshly made by our
          Yumtum users.
        </p>
      </div>
      <Splide
        options={{
          perPage: 3,
          arrows: true,
          pagination: true,
          drag: "free",
          gap: "3rem",
        }}
      >
        {recipes.map((r) => (
          <SplideSlide key={r.id}>
            <Card className="randomcards" key={r.id}>
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
  margin: 5rem 0rem;
  .text {
    text-align: center;
    margin: 1rem 0rem;
    h2 {
      font-size: 3rem;
      margin: 1rem 0rem;
    }
    #bottom {
      color: orange;
      font-weight: bold;
    }
  }
`;

const Card = styled.div`
  cursor: grab;
  min-height: 25rem;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  transition: all ease 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
  img {
    border-radius: 5px;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
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

export default RandomRecipes;
