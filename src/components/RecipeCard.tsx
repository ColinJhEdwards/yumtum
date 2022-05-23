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
    <Hide>
      <StyledCard>
        <img src={image || placeholder} alt={title} loading="lazy" />
        <h2>{title}</h2>
        <Gradient />
      </StyledCard>
    </Hide>
  );
};

const StyledCard = styled.div`
  position: relative;
  width: 300px;
  height: 250px;

  cursor: pointer;
  &:hover {
    img {
      transform: scale(1.2);
    }
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: all ease 0.5s;
  }
  h2 {
    font-size: 1.2rem;
    width: 80%;
    margin: auto;
    color: white;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 3;
  }
`;

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  border-radius: 5px;
  transition: all ease 0.5s;

  &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0), #8a5a028f);
  }
`;

const Hide = styled.div`
  margin: 1rem;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
`;

export default RecipeCard;
