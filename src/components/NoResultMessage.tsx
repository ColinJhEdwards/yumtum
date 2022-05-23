import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { GiForkKnifeSpoon } from "react-icons/gi";

interface PropInfo {
  searchValue: string | undefined;
}

const NoResultMessage = ({ searchValue }: PropInfo) => {
  return (
    <StyledCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <h2>No yum for your tum!</h2>
      <GiForkKnifeSpoon />
      <p>
        Sorry we couldn't find any recipes for <span>{searchValue}</span>.
      </p>
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
  height: 30vh;
  width: 30%;
  h2 {
    color: orange;
  }
  svg {
    font-size: 4rem;

    text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
  }
  p {
    font-weight: bold;
    color: #5a5a5a;
  }
  span {
    color: orange;
  }
`;

export default NoResultMessage;
