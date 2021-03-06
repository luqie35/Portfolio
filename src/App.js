import React from "react";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import "./App.css";
import "./components/form/form";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Portfolio />
    </div>
  );
}

export default App;
