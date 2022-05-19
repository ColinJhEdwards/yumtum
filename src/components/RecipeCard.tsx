import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface PropInfo {
  key: number;
  id: number;
  image: string;
  title: string;
}

const RecipeCard: FunctionComponent<PropInfo> = ({
  key,
  id,
  image,
  title,
}: PropInfo) => {
  return <div>RecipeCard</div>;
};

export default RecipeCard;
