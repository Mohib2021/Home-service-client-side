import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Service() {
	return (
		<div className="my-5">
			<Container>
				<div className="my-5 text-center">
					<h6>Services</h6>
					<h3 className="fw-bold">
						We're an agency tailored to all <br /> client's needs that always
						delivers{" "}
					</h3>
				</div>
				<Row>
					<Col></Col>
					<Col>
						<h2 className="text-center">Data will be shown here </h2>
					</Col>
					<Col></Col>
				</Row>
				<div className="mt-3 text-center">
					<button className="btn btn-dark">Explore More</button>
				</div>
			</Container>
		</div>
	);
}

export default Service;
