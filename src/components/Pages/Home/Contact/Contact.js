import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./Contact.module.css";
function Contact() {
	return (
		<div className={`my-5 ${style.contactForm}`}>
			<Container>
				<div className="text-center mb-5">
					<h6>Contact Us</h6>
					<h3 className="fw-bold">
						Let's handle your <br /> Project Professionally{" "}
					</h3>
				</div>
				<Row className="g-4">
					<Col sm={12}>
						<Row className="g-4">
							<Col sm={12} md={6}>
								<input
									type="text"
									placeholder="First Name"
									className="form-control"
								/>
							</Col>
							<Col sm={12} md={6}>
								<input
									type="text"
									placeholder="Last Name"
									className="form-control"
								/>
							</Col>
						</Row>
					</Col>
					<Col sm={12}>
						<Row className="g-4">
							<Col sm={12} md={6}>
								<input
									type="email"
									placeholder="Email"
									className="form-control"
								/>
							</Col>
							<Col sm={12} md={6}>
								<input
									type="number"
									placeholder="Phone"
									className="form-control"
								/>
							</Col>
							<Col>
								<textarea
									placeholder="Your message"
									className="form-control"
									cols="30"
									rows="7"
								></textarea>
							</Col>
							<div className="text-center">
								<button className="btn btn-dark">Send Message</button>
							</div>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Contact;
