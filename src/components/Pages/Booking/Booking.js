import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import style from "./Booking.module.css";
function Booking() {
	const { user } = useAuth();
	const [userName, setUserName] = useState(user.displayName);
	const [userEmail, setUserEmail] = useState(user.email);
	const nameRef = useRef();
	const emailRef = useRef();
	const phoneRef = useRef();
	const addressRef = useRef();

	const { id } = useParams();
	const [service, setService] = useState({});
	const { photo, name, price, description } = service;
	useEffect(() => {
		fetch(`https://murmuring-lowlands-26250.herokuapp.com/services/${id}`)
			.then((res) => res.json())
			.then((data) => setService(data));
	}, [id]);

	const handlePostBooking = (e) => {
		e.preventDefault();
		const buyingInfo = {
			userName: nameRef.current.value,
			userPicture: user.photoURL,
			email: emailRef.current.value,
			phone: phoneRef.current.value,
			address: addressRef.current.value,
			productPhoto: photo,
			productName: name,
			productPrice: price,
			status: "Pending",
		};
		fetch("https://murmuring-lowlands-26250.herokuapp.com/orders", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(buyingInfo),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				e.target.reset();
			});
	};
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
										src={
											photo?.length < 400
												? photo
												: "data:image/jpeg;base64," + photo
										}
										alt="service"
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
									<form
										className={style.formContainer}
										onSubmit={handlePostBooking}
									>
										<h3 className="text-center mb-3">Confirmation</h3>
										<input
											onChange={(e) => setUserName(e.target.value)}
											value={userName}
											ref={nameRef}
											type="text"
											className="form-control mb-3"
											required
										/>
										<input
											onChange={(e) => setUserEmail(e.target.value)}
											value={userEmail}
											ref={emailRef}
											type="email"
											className="form-control mb-3"
											required
										/>
										<input
											ref={phoneRef}
											type="number"
											placeholder="Phone"
											className="form-control mb-3"
											required
										/>
										<textarea
											ref={addressRef}
											placeholder="Address"
											className="form-control mb-3"
											required
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
