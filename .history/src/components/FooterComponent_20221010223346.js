import React from 'react'

export default function FooterComponent() {
  return (
    <div>
      <section
        id="fh5co-contact"
        data-section="contact"
        style={{ borderTop: "2px solid #c24d67" }}
      >
        <div className="container">
          <div className="row">
              <div className="col-md-4 to-animate">
                <h3>Contact Info</h3>
                <ul className="fh5co-contact-info">
                  <li>
                    <i className="icon-home"></i>36Inc Incubation Centre,
                    Raipur, Chhattisgarh
                  </li>
                  <li>
                    <i className="icon-envelope"></i>Gaurav Mehta & Team
                  </li>
                  <li>
                    <i className="icon-phone"></i>+91 877 046 7824
                  </li>
                </ul>
                <div className="form-group ">
                  <a
                    rel="noopener"
                    className="btn btn-primary btn-lg"
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLScY8eRM8vKYqxOk8EkxHlNGjagj-Hm-ePQu4LbVlgjD5vNo3w/viewform"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
          </div>
        </div>
      </section>
      <footer id="footer" role="contentinfo">
        <a href="#" className="gotop js-gotop">
          <i className="icon-arrow-up2"></i>
        </a>
        <div className="container">
          <div className="">
            <div className="col-md-12 text-center">
              <p>&copy; All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
