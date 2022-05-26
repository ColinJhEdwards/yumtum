import React from "react";
import Nav from "./components/Nav";
import InputBar from "./components/InputBar";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import SearchRecipe from "./pages/SearchRecipe";
import Cuisines from "./components/Cuisines";
import SelectedCuisine from "./pages/SelectedCuisine";
import RecipeInstructions from "./pages/RecipeInstructions";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

const App: React.FC = () => {
  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <InputBar />
      <Cuisines />
      {/* AnimatePresence is used for animating components when they are removed from the react tree */}
      <AnimatePresence exitBeforeEnter>
        {/* adding location and key using useLocation is required for animatePresence to work */}
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeInstructions />} />
          <Route path="/search/:value" element={<SearchRecipe />} />
          <Route path="/cuisine/:value" element={<SelectedCuisine />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
