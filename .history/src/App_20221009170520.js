import React from "react";
import HeaderComponent from "./components/HeaderComponent";
import LandingComponent from "./components/LandingComponent";
import TechComponent from "./components/TechComponent";
import ImpactComponent from "./components/ImpactComponent";
import ServicesComponent from "./components/ServicesComponent";
import CitiesComponent from "./components/CitiesComponent";
import FooterComponent from "./components/FooterComponent";
function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <LandingComponent />
      <TechComponent />
      {/* <ImpactComponent /> */}
      <ServicesComponent />
      {/* <CitiesComponent /> */}
      {/* <FooterComponent /> */}
    </div>
  );
}

export default App;
