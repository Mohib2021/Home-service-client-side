import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import style from "../AddService/AddService.module.css";
function Review() {
	const ratingChanged = (newRating) => {
		console.log(newRating);
	};
	return (
		<div className="mt-4 mb-5">
			<Container>
				<div className="text-center mb-4">
					<h6>Please</h6>
					<h3>Give us a review</h3>
				</div>
				<Row className=" g-4 align-items-center">
					<Col md={6} sm={12}>
						<div>
							<img
								src="https://i.ibb.co/m4qp95C/2456038-1.png"
								alt="review"
								className="img-fluid"
							/>
						</div>
					</Col>
					<Col md={6} sm={12}>
						<div>
							<form className={style.form} action="">
								<div className="text-center mb-3">
									<h4>Your Review</h4>
								</div>
								<textarea
									className="form-control"
									cols="30"
									rows="7"
									placeholder="Your honest opinion"
								></textarea>
								<ReactStars
									count={5}
									onChange={ratingChanged}
									size={35}
									activeColor="#ffd700"
									isHalf={true}
									value={3}
								/>
								<input
									type="submit"
									value="Submit"
									className="btn btn-secondary"
								/>
							</form>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Review;
