import React from "react";
import style from "./ShowTestimonial.module.css";
import ReactStars from "react-rating-stars-component";
function ShowTestimonial({ review }) {
	const { name, photo, rating, message } = review;
	console.log(rating);
	return (
		<div className={`p-1 p-md-2 ${style.review}`}>
			<img
				style={{ width: "100%", height: "220px" }}
				src={photo}
				alt="testimonial"
			/>
			<h4 className="mt-2">{name}</h4>
			<p className="mb-0">{message}</p>
			<ReactStars
				count={5}
				edit={false}
				isHalf={true}
				value={rating}
				size={35}
			/>
		</div>
	);
}

export default ShowTestimonial;
