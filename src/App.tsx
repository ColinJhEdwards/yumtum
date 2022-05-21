import React from "react";
import Nav from "./components/Nav";
import SearchRecipe from "./components/InputBar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <SearchRecipe />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
