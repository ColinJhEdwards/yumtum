import React from "react";
import RandomRecipes from "../components/RandomRecipes";
import styled from "styled-components";
import VeggieRecipes from "../components/VeggieRecipes";
import VeganRecipes from "../components/VeganRecipes";

const Home: React.FC = () => {
  return (
    <StyledHome>
      <div className="random">
        <RandomRecipes />
      </div>
      <div className="veggie">
        <VeggieRecipes />
      </div>
      <div className="vegan">
        <VeganRecipes />
      </div>
    </StyledHome>
  );
};

const StyledHome = styled.section`
  min-height: 90vh;
  width: 90%;
  margin: auto;
`;

export default Home;
