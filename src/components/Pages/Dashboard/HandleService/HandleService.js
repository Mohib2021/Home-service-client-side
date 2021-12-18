import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Card from "../../Card/Card";

function HandleService() {
	const [services, setServices] = useState([]);
	const handleDeleteService = (_id) => {
		fetch(`https://murmuring-lowlands-26250.herokuapp.com/services/${_id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};
	useEffect(() => {
		fetch("https://murmuring-lowlands-26250.herokuapp.com/services")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, [handleDeleteService]);
	return (
		<div className="mb-5">
			<Container>
				<div className="my-4 text-center">
					<h6>Handle </h6>
					<h3>All Of the Services</h3>
				</div>
				<Row className="g-4">
					{services.map((service) => (
						<Card
							key={service._id}
							btnTxt="Delete"
							deleteService={handleDeleteService}
							data={service}
						/>
					))}
				</Row>
			</Container>
		</div>
	);
}

export default HandleService;
