import React from 'react'
import fullimage2 from "../images/full_image_2.jpg";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BlogListComponent from './BlogListComponent';
import IBlogComponent from './IBlogComponent';

const router2 = createBrowserRouter([
  {
    path: "/blog",
    element: <BlogListComponent/>,
  },
  {
    path: "/blog/:id",
    element: <IBlogComponent/>,
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
          <RouterProvider router={router2} />
        </div>
      </section>
    </div>
  );
}

export default BlogComponent;
