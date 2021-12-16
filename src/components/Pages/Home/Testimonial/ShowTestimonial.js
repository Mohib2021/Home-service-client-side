import React from "react";
import style from "./ShowTestimonial.module.css";
import ReactStars from "react-rating-stars-component";
function ShowTestimonial({ review }) {
	const { name, photo, rating, message } = review;
	return (
		<div className={`p-1 p-md-2 ${style.review}`}>
			<img src={photo} alt="testimonial" className="img-fluid" />
			<h4 className="mt-2">{name}</h4>
			<p className="mb-0">{message}</p>
			<ReactStars count={5} edit={false} value={rating} size={35} />
		</div>
	);
}

export default ShowTestimonial;
