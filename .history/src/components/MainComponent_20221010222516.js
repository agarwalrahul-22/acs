import React from 'react'
import LandingComponent from "./main/LandingComponent";
import TechComponent from "./main/TechComponent";
import ImpactComponent from "./main/ImpactComponent";
import ServicesComponent from "./main/ServicesComponent";
import CitiesComponent from "./main/CitiesComponent";
import ContactComponent from './Main/ContactComponent';
export default function MainComponent() {
  return (
    <div>
      <LandingComponent />
      <TechComponent />
      <ImpactComponent />
      <ServicesComponent />
      <CitiesComponent />
      <ContactComponent />
    </div>
  );
}
