import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import MainComponent from "./components/MainComponent";
function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <MainComponent/>
      <FooterComponent />
    </div>
  );
}

export default App;
