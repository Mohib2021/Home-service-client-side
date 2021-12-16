import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./Footer.module.css";
function Footer() {
	return (
		<footer className="bg-dark text-white pt-5 pb-3">
			<Container>
				<Row className="g-4">
					<Col md={4} sm={12}>
						<div>
							<h5 className="fw-bold">Find Us</h5>
							<div className={style.link}>
								<iframe
									title="Map of our office"
									className={style.map}
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.67863927909!2d90.39695081696188!3d23.794774936890555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c15ea1de1%3A0x97856381e88fb311!2sBanani%20Model%20Town%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1639529792505!5m2!1sen!2sbd"
									loading="lazy"
								></iframe>
							</div>
						</div>
					</Col>
					<Col md={2} sm={12}>
						{" "}
						<div>
							<h5 className="fw-bold">Company</h5>
						</div>
						<div className={`small ${style.link}`}>
							<p>
								<span href="#">About</span>
							</p>
							<p>
								<span href="#"> Our Project</span>
							</p>
							<p>
								<span href="#"> Our Team</span>
							</p>
							<p>
								<span href="#">Terms Conditions</span>
							</p>
							<p>
								<span href="#">Submitting List</span>
							</p>
						</div>
					</Col>
					<Col md={2} sm={12}>
						{" "}
						<div>
							<h5 className="fw-bold">Quic Links</h5>
						</div>
						<div className={`small ${style.link}`}>
							<p>
								<span href="#">Sales</span>
							</p>
							<p>
								<span href="#">Average Rate</span>
							</p>
							<p>
								<span href="#"> Our Blogs</span>
							</p>
							<p>
								<span href="#">Rentals</span>
							</p>
							<p>
								<span href="#">Contacts Us</span>
							</p>
						</div>
					</Col>
					<Col md={4} sm={12}>
						{" "}
						<div>
							<h5 className="fw-bold">About Us</h5>
						</div>
						<div className="">
							<p className={`small ${style.link}`}>
								We are one and only platform in online to help you any time in
								your door anywhere around Bangladesh. We have proficient team
								who are responsible to make your home attractive any time.What
								you have to do is contacting, paying and getting services.
							</p>
						</div>
					</Col>
				</Row>
				<p className="text-center mt-3 text-muted small">
					All copyright &copy; Reserved 2020-{new Date().getFullYear()}
				</p>
			</Container>
		</footer>
	);
}

export default Footer;
