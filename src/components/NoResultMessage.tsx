import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface PropInfo {
  searchValue: string | undefined;
}

const NoResultMessage = ({ searchValue }: PropInfo) => {
  return (
    <StyledCard>
      <h2>No yum for your tum!</h2>
      <p>Sorry we could not find any recipes for {searchValue}</p>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 20vh;
  width: 30%;
  h2 {
    color: orange;
  }
`;

export default NoResultMessage;
