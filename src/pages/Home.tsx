import React from "react";
import RandomRecipes from "../components/RandomRecipes";

const Home: React.FC = () => {
  return (
    <section>
      <div className="home">
        <RandomRecipes />
      </div>
    </section>
  );
};

export default Home;
