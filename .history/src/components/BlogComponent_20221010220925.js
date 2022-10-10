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
              <h1 className="to-animate">Blogs </h1>
            </div>
          </div>
        </div>
        <div className="slant"></div>
      </section>
      <section id="fh5co-intro">
        <div className="container">
          <div className="row row-bottom-padded-lg"
          style={{backgroundColor:'white', padding:'30px', boxShadow:'10px 10px 10px 10px white'}}
          >
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
            <div className="col-md-4 col-sm-6 col-xxs-12">
              <a
                href={audit}
                className="fh5co-project-item image-popup to-animate"
              >
                <img src={audit} alt="Image" className="img-responsive" />
                <div className="fh5co-text">
                  <h2>Auditability</h2>
                  <span>
                    Since Blockchain are accessible, the cryptographic proofs
                    that we generate are everything need to provide or verify
                    that event happened while maintaining absolute privacy.
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogComponent;
