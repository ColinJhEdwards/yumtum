import React from "react";
import RandomRecipes from "../components/RandomRecipes";
import styled from "styled-components";
import VeggieRecipes from "../components/VeggieRecipes";
import VeganRecipes from "../components/VeganRecipes";
import { fade, pageAnimation } from "../animations";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <StyledHome
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={fade} className="random">
        <RandomRecipes />
      </motion.div>
      <motion.div variants={fade} className="veggie">
        <VeggieRecipes />
      </motion.div>
      <motion.div variants={fade} className="vegan">
        <VeganRecipes />
      </motion.div>
    </StyledHome>
  );
};

const StyledHome = styled(motion.section)`
  min-height: 90vh;
  width: 90%;
  margin: auto;
`;

export default Home;
