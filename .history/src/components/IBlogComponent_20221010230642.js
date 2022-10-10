import React from 'react'
import fullimage2 from "../images/full_image_2.jpg";
import privacy from "../images/privacy_acs.jpg";
import distributed from "../images/distributed_acs.jpg";
import audit from "../images/audit_acs.jpg";
function IBlogComponent() {
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
              <h1 className="to-animate">Blog {id} </h1>
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
            <div className="col-md-4 col-sm-6 col-xxs-12">
                <img src={privacy} alt="Image" className="img-responsive" />
                <div className="fh5co-text">
                  <h2>Blog 1</h2>
                  <span>
                    We never publish raw data on the Blockchain. We use unique
                    cryptographic identifiers in order not to reveal the
                    original data. Furthermore, we have no access to original
                    files.
                  </span>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default IBlogComponent;
