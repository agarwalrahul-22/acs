import React from 'react'

export default function ServicesComponent() {
  return (
    <div>
      <section id="fh5co-services" data-section="services">
        <div class="container">
          <div class="row">
            <div class="col-md-12 section-heading text-left">
              <h2 class=" left-border to-animate">Services</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-sm-6 fh5co-service to-animate">
              <img
                src="images/data.svg"
                style="width: 90px; height: 90px"
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
            <div class="col-md-6 col-sm-6 fh5co-service to-animate">
              <img
                src="images/law.svg"
                style="width: 90px; height: 90px"
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

            <div class="clearfix visible-sm-block"></div>

            <div class="col-md-6 col-sm-6 fh5co-service to-animate">
              <img
                src="images/house.svg"
                style="width: 90px; height: 90px"
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
            <div class="col-md-6 col-sm-6 fh5co-service to-animate">
              <img
                src="images/plan.svg"
                style="width: 90px; height: 90px"
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
