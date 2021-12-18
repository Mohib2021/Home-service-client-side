import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth/useAuth";
import ShowOrderList from "./ShowOrderList";
import style from "./OrderList.module.css";
function OrderList() {
	const { user } = useAuth();
	const [orderList, seTOrderList] = useState([]);
	useEffect(() => {
		fetch("https://murmuring-lowlands-26250.herokuapp.com/orders")
			.then((res) => res.json())
			.then((data) => seTOrderList(data));
	}, []);
	const yourOrderList = orderList.filter((order) => order.email === user.email);
	const button = ["Cancel"];
	const yourPlacedOrder = yourOrderList.length ? (
		<Row className="g-4 ">
			{yourOrderList.map((list) => (
				<ShowOrderList key={list._id} button={button} data={list} />
			))}
		</Row>
	) : (
		<div className={style.noOrder}>
			<h2>Sorry! Your don't have any order.</h2>
		</div>
	);
	return (
		<div className="my-5 ">
			<Container>
				<div className="text-center mb-4">
					<h6>Your</h6>
					<h3>Order list</h3>
				</div>
				{yourPlacedOrder}
			</Container>
		</div>
	);
}

export default OrderList;
