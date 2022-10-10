import React from "react";
import { createBrowserRouter, RouterProvider, Route, BrowserRouter } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import MainComponent from "./components/MainComponent";
import BlogComponent from "./components/BlogComponent";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
          <Switch>
            <Route exact from="/" render={props => <MainComponent {...props} />} />
            <Route exact from="/blog" render={props => <BlogComponent {...props} />} />
          </Switch>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
