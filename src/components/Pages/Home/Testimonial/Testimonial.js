import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
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
	return (
		<div className="my-5">
			<Container>
				<Carousel breakPoints={breakPoints}>
					{data.map((single) => (
						<div key={single.id}>
							<div>
								<h2>{single.title}</h2>
							</div>
						</div>
					))}
				</Carousel>
			</Container>
		</div>
	);
}

export default Testimonial;
