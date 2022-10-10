import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";

import FooterComponent from "./components/FooterComponent";
function App() {
  return (
    <div className="App">
      <HeaderComponent />
      
      <FooterComponent />
    </div>
  );
}

export default App;
