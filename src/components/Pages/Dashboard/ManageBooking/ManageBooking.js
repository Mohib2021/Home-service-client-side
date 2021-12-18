import { Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import ShowOrderList from "../OrderList/ShowOrderList";
import style from "../OrderList/OrderList.module.css";
function ManageBooking() {
	const [orderList, seTOrderList] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/orders")
			.then((res) => res.json())
			.then((data) => seTOrderList(data));
	}, []);
	const button = ["Delete", "Confirm"];
	return (
		<div className="my-5 ">
			<Container>
				<div className="text-center mb-4">
					<h6>Your</h6>
					<h3>Order list</h3>
				</div>
				{orderList.length ? (
					<Row className="g-4">
						{orderList.map((list) => (
							<ShowOrderList key={list._id} button={button} data={list} />
						))}
					</Row>
				) : (
					<div className={style.noOrder}>
						<h2>There has not any order to show!</h2>
					</div>
				)}
			</Container>
		</div>
	);
}

export default ManageBooking;
