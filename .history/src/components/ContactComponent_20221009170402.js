import React from 'react'

export default function ContactComponent() {
  return (
    <div>
      <section id="fh5co-contact" data-section="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12 section-heading text-center">
              <h2 className="to-animate">More Information</h2>
            </div>
            <div className="row row-bottom-padded-md">
              <div className="col-md-6 to-animate">
                <h3>Contact Info</h3>
                <ul className="fh5co-contact-info">
                  <li>
                    <i className="icon-home"></i>36Inc Incubation Centre, Raipur,
                    Chhattisgarh
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
        </div>
      </section>
    </div>
  );
}
