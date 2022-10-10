import React from 'react'
import LandingComponent from "./components/main/LandingComponent";
import TechComponent from "./components/main/TechComponent";
import ImpactComponent from "./components/main/ImpactComponent";
import ServicesComponent from "./components/main/ServicesComponent";
import CitiesComponent from "./components/main/CitiesComponent";
export default function MainComponent() {
  return (
    <div>
      <LandingComponent />
      <TechComponent />
      <ImpactComponent />
      <ServicesComponent />
      <CitiesComponent />
    </div>
  );
}
