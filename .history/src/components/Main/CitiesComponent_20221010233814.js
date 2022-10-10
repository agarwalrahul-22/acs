import React from 'react'
import c1 from "../../images/c1.jpg";
import c2 from "../../images/c2.jpg";
import c3 from "../../images/c3.jpg";
import c4 from "../../images/c4.jpg";
import c5 from "../../images/c5.jpg";
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
				<img src={c2} alt="Free Website Template by GetTemplates.co" className="img-responsive"/>
			</div>
			<div className="col-md-2 text-center client col-sm-6 col-xs-6 col-xs-offset-0 col-sm-offset-0">
				<img src={c3} alt="Free Website Template by GetTemplates.co" className="img-responsive"/>
			</div>
			<div className="col-md-2 text-center client col-sm-6 col-xs-6 col-xs-offset-0 col-sm-offset-0">
				<img src={c4} alt="Free Website Template by GetTemplates.co" className="img-responsive"/>
			</div>
			<div className="col-md-2 text-center client col-sm-6 col-xs-6 col-xs-offset-0 col-sm-offset-0">
				<img src={c5} alt="Free Website Template by GetTemplates.co" className="img-responsive"/>
			</div>
		</div>
	</section>
    </div>
  )
}
