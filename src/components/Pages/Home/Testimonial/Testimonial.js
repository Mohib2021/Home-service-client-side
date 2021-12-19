import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import ShowTestimonial from "./ShowTestimonial";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 778, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 4 },
];
function Testimonial() {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch("https://murmuring-lowlands-26250.herokuapp.com/reviews")
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
				{reviews.length ? (
					<Carousel breakPoints={breakPoints}>
						{reviews.map((review) => (
							<ShowTestimonial key={review._id} review={review} />
						))}
					</Carousel>
				) : (
					<Stack
						sx={{ color: "grey.500" }}
						spacing={2}
						className="justify-content-center my-5"
						direction="row"
					>
						<CircularProgress color="secondary" />
						<CircularProgress color="success" />
						<CircularProgress color="inherit" />
					</Stack>
				)}
			</Container>
		</div>
	);
}

export default Testimonial;
