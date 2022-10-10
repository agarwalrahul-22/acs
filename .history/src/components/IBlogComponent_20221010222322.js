import React from 'react'
import fullimage2 from "../images/full_image_2.jpg";

export default function IBlogComponent() {
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
              <h1 className="to-animate">Blog 1 </h1>
            </div>
          </div>
        </div>
        <div className="slant"></div>
      </section>
      <section id="fh5co-intro">
        <div className="container">
          <div
            className="row row-bottom-padded-lg"
            style={{
              backgroundColor: "white",
              padding: "30px",
              boxShadow: "5px 5px 20px 8px lightgrey",
            }}
          >
          </div>
        </div>
      </section>
    </div>
  );
}
