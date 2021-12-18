import { Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import ShowOrderList from "../OrderList/ShowOrderList";
import style from "../OrderList/OrderList.module.css";
function ManageBooking() {
	const [orderList, seTOrderList] = useState([]);
	const handleDeleteOrder = (_id) => {
		fetch(`https://murmuring-lowlands-26250.herokuapp.com/orders/${_id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	useEffect(() => {
		fetch("https://murmuring-lowlands-26250.herokuapp.com/orders")
			.then((res) => res.json())
			.then((data) => seTOrderList(data));
	}, [handleDeleteOrder]);
	const buttonAndAction = ["Delete", "Confirm", handleDeleteOrder];
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
							<ShowOrderList
								key={list._id}
								buttonAndAction={buttonAndAction}
								data={list}
							/>
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
