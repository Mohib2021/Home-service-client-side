import React from "react";
import { Col, Row } from "react-bootstrap";
import style from "./ShowOrderList.module.css";

function ShowOrderList({ buttonAndAction, data }) {
	const {
		address,
		email,
		phone,
		userName,
		userPicture,
		productName,
		productPhoto,
		productPrice,
		status,
		_id,
	} = data;

	return (
		<>
			<Col md={12}>
				<div className={style.card}>
					<Row className=" g-3">
						<Col md={1} xs={3}>
							<img
								src={userPicture}
								alt="user"
								className="img-fluid rounded-circle"
							/>
						</Col>
						<Col md={3} xs={9}>
							<h6>Ordered By</h6>
							<div>
								<b>{userName}</b> <br />
								<span>{email}</span>
							</div>
						</Col>
						<Col md={2} xs={5}>
							<img
								src={productPhoto}
								className="img-fluid rounded"
								alt="product"
							/>
						</Col>
						<Col md={2} xs={7}>
							<h6>Product Info</h6>
							<div>
								<b>{productName}</b> <br />
								<span>${productPrice}</span> <br />
								<span className="bg-success text-white small p-1 rounded">
									{status}
								</span>
							</div>
						</Col>
						<Col md={2} xs={6}>
							<h6>Shipping Address</h6>
							<div>
								<span>{phone}</span> <br />
								<span>{address}</span>
							</div>
						</Col>
						<Col md={2} xs={6}>
							<h6>Action</h6>
							{buttonAndAction.length > 2 ? (
								<div className="d-flex">
									<button
										onClick={() => buttonAndAction[2](_id)}
										className="btn px-2 me-1 btn-danger"
									>
										{buttonAndAction[0]}
									</button>{" "}
									<br />
									<button className="btn px-2 btn-success">
										{buttonAndAction[1]}
									</button>
								</div>
							) : (
								<button
									onClick={() => buttonAndAction[1](_id)}
									className="btn btn-danger"
								>
									{buttonAndAction[0]}
								</button>
							)}
						</Col>
					</Row>
				</div>
			</Col>
		</>
	);
}

export default ShowOrderList;
