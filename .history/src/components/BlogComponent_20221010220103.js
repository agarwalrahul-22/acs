import React from 'react'
import report from "../images/report.svg";
import blockchain from "../images/blockchain.svg";
import img7 from "../images/img_7.jpg";
import img8 from "../images/img_8.jpg";
import img10 from "../images/img_10.jpg";
import fullimage2 from "../images/full_image_2.jpg";
import privacy from "../images/privacy_acs.jpg";
import distributed from "../images/distributed_acs.jpg";
import audit from "../images/audit_acs.jpg";
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
              <h1 className="to-animate">Blog Title </h1>
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
            <div className="col-md-4 col-sm-6 col-xxs-12">
              <a
                href={privacy}
                className="fh5co-project-item image-popup to-animate"
              >
                <img src={privacy} alt="Image" className="img-responsive" />
                <div className="fh5co-text">
                  <h2>Privacy</h2>
                  <span>
                    We never publish raw data on the Blockchain. We use unique
                    cryptographic identifiers in order not to reveal the
                    original data. Furthermore, we have no access to original
                    files.
                  </span>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-sm-6 col-xxs-12">
              <a
                href={distributed}
                className="fh5co-project-item image-popup to-animate"
              >
                <img src={distributed} alt="Image" className="img-responsive" />
                <div className="fh5co-text">
                  <h2>Distributed</h2>
                  <span>
                    Use of Inter Planetary File System (IPFS) with Blockchain
                    has made possible to store high volume of data securely with
                    zero duplication distributed across network of nodes.
                  </span>
                </div>
              </a>
            </div>
            <div
              className="fh5co-block to-animate"
              style={{ backgroundImage: { img10 } }}
            >
              <div className="overlay-darker"></div>
              <div className="overlay"></div>
              <div className="fh5co-text">
                <img src={report} style={{ width: 90, height: 90 }} alt="" />
                <p></p>
                <h2>Reporting</h2>
                <p>
                  Reporting for hotel, lodges and landlord made easy with
                  advance automated reporting features. Save millions of pages
                  and enviroment.
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Made Easy
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div>
            <h1>Decades old compliance process</h1>
            <h3>
              <i>
                Atithi, show your identity document. Make a copy. Put entry in
                register. Welcome!
              </i>
            </h3>
            <h3>
              Paper based processes don’t just cost you time. They can have
              significant environmental impact. We’re committed to helping
              both.Blockchain enabled KYC compliance for Atithi ensure security,
              integrity & privacy.
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogComponent;
