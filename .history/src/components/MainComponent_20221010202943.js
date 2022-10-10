import React from 'react'
import LandingComponent from "./components/Main/LandingComponent";
import TechComponent from "./components/Main/TechComponent";
import ImpactComponent from "./components/Main/ImpactComponent";
import ServicesComponent from "./components/Main/ServicesComponent";
import CitiesComponent from "./components/Main/CitiesComponent";
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
