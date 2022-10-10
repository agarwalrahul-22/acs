import React from 'react'
import fullimage2 from "../images/full_image_2.jpg";
import IBlogComponent from "./components/IBlogComponent";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
} from "react-router-dom";
import BlogListComponent from './BlogListComponent';

const router = createBrowserRouter([
  {
    path: "/blog",
    element: <BlogListComponent/>,
  },
  {
    path: "/blog/:id",
    element: <IBlogComponent />,
  },
]);
function BlogComponent() {
  return (
    <div>
      <section
        id="fh5co-home"
        data-section="home"
        style={{ backgroundImage: { fullimage2 } }}
        data-stellar-background-ratio="0.5"
      >
        <div className="gradient"></div>
        <div className="container">
          <div className="text-wrap">
            <div className="text-inner">
              <h1 className="to-animate">Blogs </h1>
            </div>
          </div>
        </div>
        <div className="slant"></div>
      </section>
      <section id="fh5co-intro">
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </section>
    </div>
  );
}

export default BlogComponent;
