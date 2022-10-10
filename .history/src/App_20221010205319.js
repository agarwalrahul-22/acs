import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
  Switch,
} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import MainComponent from "./components/MainComponent";
import BlogComponent from "./components/BlogComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainComponent />,
  },
  // {
  //   path: "/blog",
  //   element: <BlogComponent />,
  // },
]);

function App() {
  return (
    <div className="App">
        <HeaderComponent />
        <FooterComponent />
    </div>
  );
}

export default App;
