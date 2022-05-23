import React from "react";
import Nav from "./components/Nav";
import InputBar from "./components/InputBar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SearchRecipe from "./pages/SearchRecipe";
import Cuisines from "./components/Cuisines";
import SelectedCuisine from "./pages/SelectedCuisine";

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <InputBar />
      <Cuisines />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:value" element={<SearchRecipe />} />
        <Route path="/cuisine/:value" element={<SelectedCuisine />} />
      </Routes>
    </div>
  );
};

export default App;
