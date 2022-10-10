import React from 'react'
import c1 from "../images/c1";
import c2 from "../images/c2";
import c3 from "../images/c3";
import c4 from "../images/c4";
import c5 from "../images/c5";
export default function CitiesComponent() {
  return (
    <div>
      <section id="fh5co-about" data-section="cities">
		<div className="container">
			<div className="row">
				<div className="col-md-12 section-heading text-center">
					<h2 className="to-animate">Smart Cities</h2>
					<div className="row">
						<div className="col-md-8 col-md-offset-2 subtext to-animate">
							<h3>We are here to power smart cities and tranform India to Digital India </h3>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-2 col-md-offset-1 text-center client col-sm-6 col-xs-6 col-xs-offset-0 col-sm-offset-0">
				<img src={c1} alt="Free Website Template by GetTemplates.co" className="img-responsive"/>
			</div>
			<div className="col-md-2 text-center client col-sm-6 col-xs-6 col-xs-offset-0 col-sm-offset-0">
				<img src={c2} alt="Free Website Template by GetTemplates.co" className="img-responsive">
			</div>
			<div className="col-md-2 text-center client col-sm-6 col-xs-6 col-xs-offset-0 col-sm-offset-0">
				<img src={c3} alt="Free Website Template by GetTemplates.co" className="img-responsive">
			</div>
			<div className="col-md-2 text-center client col-sm-6 col-xs-6 col-xs-offset-0 col-sm-offset-0">
				<img src={c4} alt="Free Website Template by GetTemplates.co" className="img-responsive">
			</div>
			<div className="col-md-2 text-center client col-sm-6 col-xs-6 col-xs-offset-0 col-sm-offset-0">
				<img src={c5} alt="Free Website Template by GetTemplates.co" className="img-responsive">
			</div>
		</div>
	</section>

	<section id="fh5co-counters" style="background-image: url(images/full_image_1.jpg);"
		data-stellar-background-ratio="0.5">
		<div className="fh5co-overlay"></div>
		<div className="container">
			<div className="row">
				<div className="col-md-12 section-heading text-center to-animate">
					<h2>Success Metrics</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4 col-sm-6 col-xs-12">
					<div className="fh5co-counter to-animate">
						<i className="fh5co-counter-icon icon-home to-animate-2"></i>
						<span className="fh5co-counter-number js-counter" data-from="0" data-to="0" data-speed="2000"
							data-refresh-interval="50">0</span>
						<span className="fh5co-counter-label">Hotel Registrations</span>
					</div>
				</div>
				<div className="col-md-4 col-sm-6 col-xs-12">
					<div className="fh5co-counter to-animate">
						<i className="fh5co-counter-icon icon-check to-animate-2"></i>
						<span className="fh5co-counter-number js-counter" data-from="0" data-to="0" data-speed="1000"
							data-refresh-interval="100">0</span>
						<span className="fh5co-counter-label">Atithi Compliance</span>
					</div>
				</div>
				<div className="col-md-4 col-sm-6 col-xs-12">
					<div className="fh5co-counter to-animate">
						<i className="fh5co-counter-icon icon-doc to-animate-2"></i>
						<span className="fh5co-counter-number js-counter" data-from="0" data-to="0" data-speed="2000"
							data-refresh-interval="50">0</span>
						<span className="fh5co-counter-label">Compliance Reports</span>
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
  )
}
