import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import style from "./Booking.module.css";
function Booking() {
	const { id } = useParams();
	const [service, setService] = useState({});
	const { photo, name, price, description } = service;
	useEffect(() => {
		fetch(`http://localhost:5000/services/${id}`)
			.then((res) => res.json())
			.then((data) => setService(data));
	}, []);

	return (
		<div>
			<Header />
			<div className="my-5">
				<Container>
					<div className={style.bookingContainer}>
						<div className="text-center mb-4">
							<h6>Confirm</h6>
							<h3>Your Booking</h3>
						</div>
						<Row className="g-4  justify-content-between">
							<Col md={6} sm={12}>
								<div>
									<img
										src={photo}
										alt="service-photo"
										className="img-fluid rounded"
									/>
									<h4 className="mt-2">{name}</h4>
									<p>{description}</p>
									<h5>${price}</h5>
									<button className="btn btn-secondary">Go Back</button>
								</div>
							</Col>
							<Col md={6} sm={12}>
								<div className="">
									<form className={style.formContainer} action="">
										<h3 className="text-center mb-3">Confirmation</h3>
										<input type="text" className="form-control mb-3" />
										<input type="email" className="form-control mb-3" />
										<input
											type="number"
											placeholder="Phone"
											className="form-control mb-3"
										/>
										<textarea
											placeholder="Address"
											className="form-control mb-3"
											cols="30"
											rows="7"
										></textarea>
										<input
											type="submit"
											className="btn btn-secondary"
											value="Confirm"
										/>
									</form>
								</div>
							</Col>
						</Row>
					</div>
				</Container>
			</div>
			<Footer />
		</div>
	);
}

export default Booking;
