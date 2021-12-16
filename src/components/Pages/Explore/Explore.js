import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import { Container, Row } from "react-bootstrap";
import Card from "../Card/Card";
function Explore() {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/services")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return (
		<>
			<Header />
			<div className="my-5">
				<Container>
					<div className="text-center mb-4">
						<h6>Explore</h6>
						<h3> All of the Services</h3>
					</div>
					<Row className="g-4">
						{services.map((service) => (
							<Card key={service._id} btnTxt="Booking" data={service} />
						))}
					</Row>
				</Container>
			</div>
			<Footer />
		</>
	);
}

export default Explore;
