import React from 'react'
import { Link } from 'react-router-dom';

export default function HeaderComponent() {
  return (
    <div>
      <header role="banner" id="fh5co-header">
        <div className="container">
          <nav className="navbar navbar-default">
            <div className="navbar-header">
              <a
                href="#"
                className="js-fh5co-nav-toggle fh5co-nav-toggle"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <i></i>
              </a>
              <a className="navbar-brand" href="index.html">
                ACS
              </a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className="active">
                  <a href="/" data-nav-section="home">s
                  {/* <Link to="/" data-nav-section="home"> */}
                    <span>Home</span>
                  {/* </Link> */}
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="three">
                    <span>Technology</span>
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="impact">
                    <span>Impact</span>
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="services">
                    <span>Services</span>
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="cities">
                    <span>Cities</span>
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="contact">
                    <span>Contact</span>
                  </a>
                </li>
                <li>
                  {/* <a href="/blog" data-nav-section="contact"> */}
                  {/* <Link to="/blog"> */}
                  <span>Blog</span>
                  {/* </Link> */}
                  {/* </a> */}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
