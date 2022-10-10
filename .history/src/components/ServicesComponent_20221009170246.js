import React from 'react'
import data from "../images/data.svg";
import law from "../images/law.svg";
import house from "../images/house.svg";
import plan from "../images/plan.svg";
export default function ServicesComponent() {
  return (
    <div>
      <section id="fh5co-services" data-section="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12 section-heading text-left">
              <h2 className=" left-border to-animate">Services</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 fh5co-service to-animate">
              <img
                src={data}
                style={{width: 90, height: 90}}
                alt=""
              />
              <p></p>
              <h3>Data Management</h3>
              <p>
                ACS platform allows hotels, lodges, PG's, Airbnb, Couchsurfing
                hosts and, rent lords to enter customer details to with KYC(Know
                Your Customer) as mandated by law enforcement.
              </p>
            </div>
            <div className="col-md-6 col-sm-6 fh5co-service to-animate">
              <img
                src={law}
                style={{width: 90, height: 90}}
                alt=""
              />
              <p></p>
              <h3>Law Enforcement</h3>
              <p>
                Dashboard and permissioning management for police department to
                monitor security of smart cities, manage hotels, perform
                analytics and gather intelligence.
              </p>
            </div>

            <div className="clearfix visible-sm-block"></div>

            <div className="col-md-6 col-sm-6 fh5co-service to-animate">
              <img
                src={house}
                style={{width: 90, height: 90}}
                alt=""
              />
              <h3>Rent Lord</h3>
              <p></p>
              <p>
                {" "}
                Tenants compliance for individuals and businessess engaged
                renting houses, hostels and, rooms with facility of Suspicious
                Activity Reporting{" "}
              </p>
            </div>
            <div className="col-md-6 col-sm-6 fh5co-service to-animate">
              <img
                src={plan}
                style={{width: 90px, height: 90}}
                alt=""
              />
              <h3>Planning</h3>
              <p>
                Allows various deprtments like touriss, muncipal corporations
                and other policy makers to gain actionable insights from the
                data footprints.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
