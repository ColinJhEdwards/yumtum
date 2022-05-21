import React from "react";
import Nav from "./components/Nav";
import InputBar from "./components/InputBar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SearchRecipe from "./pages/SearchRecipe";

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <InputBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:value" element={<SearchRecipe />} />
      </Routes>
    </div>
  );
};

export default App;
