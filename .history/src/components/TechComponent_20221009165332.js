import React from 'react'
import privacy from "../images/privacy_acs"
import distributed from "../images/distributed_acs"
import audit from "../images/audit_acs"
export default function TechComponent() {
  return (
    <div>
      <section id="fh5co-work" data-section="three">
		<div className="container">
			<div className="row">
				<div className="col-md-12 section-heading text-center">
					<h2 className="to-animate">Technology</h2>
				</div>
			</div>
			<div className="row row-bottom-padded-sm">
				<div className="col-md-4 col-sm-6 col-xxs-12">
					<a href={privacy} className="fh5co-project-item image-popup to-animate">
						<img src={privacy} alt="Image" className="img-responsive">
						<div className="fh5co-text">
							<h2>Privacy</h2>
							<span>We never publish raw data on the Blockchain. We use unique cryptographic identifiers
								in order not to
								reveal the original data. Furthermore, we have no access to original files.</span>
						</div>
					</a>
				</div>
				<div className="col-md-4 col-sm-6 col-xxs-12">
					<a href={distributed} className="fh5co-project-item image-popup to-animate">
						<img src={distributed} alt="Image" className="img-responsive"/>
						<div className="fh5co-text">
							<h2>Distributed</h2>
							<span>Use of Inter Planetary File System (IPFS) with Blockchain has made possible to store
								high volume of data
								securely with zero duplication distributed across network of nodes.</span>
						</div>
					</a>
				</div>

				<div className="clearfix visible-sm-block"></div>

				<div className="col-md-4 col-sm-6 col-xxs-12">
					<a href={audit} className="fh5co-project-item image-popup to-animate">
						<img src={audit} alt="Image" className="img-responsive"/>
						<div className="fh5co-text">
							<h2>Auditability</h2>
							<span>Since Blockchain are accessible, the cryptographic proofs that we generate are
								everything need to provide
								or verify that event happened while maintaining absolute privacy.</span>
						</div>
					</a>
				</div>

			</div>
		</div>
	</section>
    </div>
  )
}
