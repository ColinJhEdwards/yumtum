import React from "react";
import RandomRecipes from "../components/RandomRecipes";
import SearchRecipe from "../components/SearchRecipe";

const Home: React.FC = () => {
  return (
    <section>
      <div className="home">
        <SearchRecipe />
        {/* <RandomRecipes /> */}
      </div>
    </section>
  );
};

export default Home;
