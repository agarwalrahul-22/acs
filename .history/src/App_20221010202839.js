import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import LandingComponent from "./components/Main/LandingComponent";
import TechComponent from "./components/Main/TechComponent";
import ImpactComponent from "./components/Main/ImpactComponent";
import ServicesComponent from "./components/Main/ServicesComponent";
import CitiesComponent from "./components/Main/CitiesComponent";
import FooterComponent from "./components/FooterComponent";
function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <LandingComponent />
      <TechComponent />
      <ImpactComponent />
      <ServicesComponent />
      <CitiesComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
