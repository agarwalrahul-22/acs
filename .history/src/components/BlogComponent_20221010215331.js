import React from 'react'
import report from "../images/report.svg";
import blockchain from "../images/blockchain.svg";
import img7 from "../images/img_7.jpg";
import img8 from "../images/img_8.jpg";
import img10 from "../images/img_10.jpg";
import fullimage2 from "../images/full_image_2.jpg";
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
              <h1 className="to-animate">Blog Title 1</h1>
              <h2 className="to-animate">
                Blockchain based compliance solution to power smart cities.
              </h2>
            </div>
          </div>
        </div>
        <div className="slant"></div>
      </section>
      
    </div>
  );
}

export default BlogComponent;
