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
      <section id="fh5co-intro">
        <div className="container">
          <div className="row row-bottom-padded-lg">
            <div
              className="fh5co-block to-animate"
              style={{ backgroundImage: { img7 } }}
            >
              <div className="overlay-darker"></div>
              <div className="overlay"></div>
              <div className="fh5co-text">
                <img src={report} style={{ width: 90, height: 90 }} alt="" />
                <p></p>
                <h2>Compliance</h2>
                <p>
                  Compliance requirements are hassle for hospitality industry.
                  Collect, organize and submit data regularly. ACS has made it
                  easy and automatic.
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Understand
                  </a>
                </p>
              </div>
            </div>
          </div>
          </div>
      </section>
    </div>
  );
}

export default BlogComponent;
