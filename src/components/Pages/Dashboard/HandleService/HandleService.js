import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Card from "../../Card/Card";

function HandleService() {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/services")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	return (
		<div className="mb-5">
			<Container>
				<div className="my-4 text-center">
					<h6>Handle </h6>
					<h3>All Of the Services</h3>
				</div>
				<Row className="g-4">
					{services.map((service) => (
						<Card key={service._id} btnTxt="Delete" data={service} />
					))}
				</Row>
			</Container>
		</div>
	);
}

export default HandleService;
