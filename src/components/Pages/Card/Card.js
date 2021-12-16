import React from "react";
import { Col } from "react-bootstrap";
import style from "./Card.module.css";
function Card({ data, btnTxt }) {
	const { photo, name, price, description } = data;
	return (
		<Col md={4} sm={12}>
			<div className={style.card}>
				<img src={photo} className="img-fluid rounded" alt="service" />
				<h4 className="mt-2">{name}</h4>
				<p>{description}</p>
				<h5>${price}</h5>
				<button className="btn btn-outline-dark">{btnTxt}</button>
			</div>
		</Col>
	);
}

export default Card;
