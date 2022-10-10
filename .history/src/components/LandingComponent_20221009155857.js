import React from 'react'

export default function LandingComponent() {
  return (
    <div>
      <section
        id="fh5co-home"
        data-section="home"
        // style="background-image: url(../images/full_image_2.jpg);"
        data-stellar-background-ratio="0.5"
      >
        <div className="gradient"></div>
        <div className="container">
          <div className="text-wrap">
            <div className="text-inner">
              <h1 className="to-animate">Atithi Compliance System</h1>
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
            //   style="background-image: url(/../images/img_7.jpg);"
            >
              <div className="overlay-darker"></div>
              <div className="overlay"></div>
              <div className="fh5co-text">
                <img
                  src="../images/report.svg"
                //   style="width: 90px; height: 90px"
                  alt=""
                />
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
            <div
              className="fh5co-block to-animate"
            //   style="background-image: url(../images/img_8.jpg);"
            >
              <div className="overlay-darker"></div>
              <div className="overlay"></div>
              <div className="fh5co-text">
                <img
                  src="/../images/blockchain.svg"
                //   style="width: 90px; height: 90px"
                  alt=""
                />
                <p></p>
                <h2>Blockchain</h2>
                <p>
                  A distributed ledger technology of blockchain allows
                  participants like hotel, police, government for maintain a
                  permanent and tamper-proof record of data.
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Know More
                  </a>
                </p>
              </div>
            </div>
            <div
              className="fh5co-block to-animate"
            //   style="background-image: url(images/img_10.jpg);"
            >
              <div className="overlay-darker"></div>
              <div className="overlay"></div>
              <div className="fh5co-text">
                <img
                  src="/../images/report.svg"
                  style={{width: 90, height: 90}}
                  alt=""
                />
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
