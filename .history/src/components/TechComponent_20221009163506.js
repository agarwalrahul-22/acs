import React from 'react'

export default function TechComponent() {
  return (
    <div>
      <section id="fh5co-work" data-section="three">
		<div class="container">
			<div class="row">
				<div class="col-md-12 section-heading text-center">
					<h2 class="to-animate">Technology</h2>
				</div>
			</div>
			<div class="row row-bottom-padded-sm">
				<div class="col-md-4 col-sm-6 col-xxs-12">
					<a href="images/privacy_acs.jpg" class="fh5co-project-item image-popup to-animate">
						<img src="images/privacy_acs.jpg" alt="Image" class="img-responsive">
						<div class="fh5co-text">
							<h2>Privacy</h2>
							<span>We never publish raw data on the Blockchain. We use unique cryptographic identifiers
								in order not to
								reveal the original data. Furthermore, we have no access to original files.</span>
						</div>
					</a>
				</div>
				<div class="col-md-4 col-sm-6 col-xxs-12">
					<a href="images/distributed_acs.jpg" class="fh5co-project-item image-popup to-animate">
						<img src="images/distributed_acs.jpg" alt="Image" class="img-responsive">
						<div class="fh5co-text">
							<h2>Distributed</h2>
							<span>Use of Inter Planetary File System (IPFS) with Blockchain has made possible to store
								high volume of data
								securely with zero duplication distributed across network of nodes.</span>
						</div>
					</a>
				</div>

				<div class="clearfix visible-sm-block"></div>

				<div class="col-md-4 col-sm-6 col-xxs-12">
					<a href="images/audit_acs.jpg" class="fh5co-project-item image-popup to-animate">
						<img src="images/audit_acs.jpg" alt="Image" class="img-responsive">
						<div class="fh5co-text">
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
