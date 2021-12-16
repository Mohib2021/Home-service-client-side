import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import ShowTestimonial from "./ShowTestimonial";
const data = [
	{ id: 1, title: "one" },
	{ id: 2, title: "two" },
	{ id: 3, title: "three" },
	{ id: 4, title: "four" },
	{ id: 5, title: "five" },
	{ id: 6, title: "six" },
	{ id: 7, title: "seven" },
];
const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 778, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 4 },
];
function Testimonial() {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/reviews")
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);
	return (
		<div className="my-5">
			<Container>
				<div className="text-center my-4">
					<h6>Reviews</h6>
					<h3 className="fw-bold">
						What clients say <br /> About Us{" "}
					</h3>
				</div>
				<Carousel breakPoints={breakPoints}>
					{reviews.map((review) => (
						<ShowTestimonial key={review._id} review={review} />
					))}
				</Carousel>
			</Container>
		</div>
	);
}

export default Testimonial;
