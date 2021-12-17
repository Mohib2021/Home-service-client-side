import React from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import style from "./Card.module.css";
function Card({ data, btnTxt }) {
	const { photo, name, price, description, _id } = data;
	const navigate = useNavigate();
	return (
		<Col md={4} sm={12}>
			<div className={style.card}>
				<img
					src={photo.length < 400 ? photo : "data:image/jpeg;base64," + photo}
					className="img-fluid rounded"
					alt="service"
				/>
				<h4 className="mt-2">{name}</h4>
				<p>{description}</p>
				<h5>${price}</h5>
				<button
					onClick={() => btnTxt === "Booking" && navigate(`/booking/${_id}`)}
					className="btn btn-outline-dark"
				>
					{btnTxt}
				</button>
			</div>
		</Col>
	);
}

export default Card;
