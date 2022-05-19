import React, { FunctionComponent } from "react";
import styled from "styled-components";
import placeholder from "../images/placeholder.png";

interface PropInfo {
  key: number;
  id: number;
  image: string;
  title: string;
}

const RecipeCard: FunctionComponent<PropInfo> = ({
  id,
  image,
  title,
}: PropInfo) => {
  return (
    <StyledCard>
      <img src={image || placeholder} alt={title} />
      <h2>{title}</h2>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  margin: 0rem 3rem;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
  }
  h2 {
    font-size: 1rem;
    width: 80%;
    margin: auto;
    color: black;
  }
`;

export default RecipeCard;
