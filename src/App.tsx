import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
};

export default App;
