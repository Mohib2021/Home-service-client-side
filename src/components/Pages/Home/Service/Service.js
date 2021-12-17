import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Card from "../../Card/Card";

function Service() {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/services")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	services.splice(6, services.length);
	console.log(services);
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
				<Row className="g-4">
					{services.map((service) => (
						<Card key={service._id} btnTxt="Booking" data={service} />
					))}
				</Row>
				<div className="mt-4 text-center">
					<button className="btn btn-dark">Explore More</button>
				</div>
			</Container>
		</div>
	);
}

export default Service;
