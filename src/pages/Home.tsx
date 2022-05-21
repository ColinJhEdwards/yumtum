import React from "react";
import RandomRecipes from "../components/RandomRecipes";
import styled from "styled-components";
import VeggieRecipes from "../components/VeggieRecipes";

const Home: React.FC = () => {
  return (
    <StyledHome>
      <div className="random">
        <RandomRecipes />
      </div>
      <div className="veggie">
        <VeggieRecipes />
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
