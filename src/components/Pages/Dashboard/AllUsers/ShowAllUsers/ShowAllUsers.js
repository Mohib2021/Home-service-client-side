import React from "react";
import { Col, Row } from "react-bootstrap";
import style from "./ShowAllUsers.module.css";
function ShowAllUsers({ data }) {
	const { displayName, email, photo, role } = data;
	console.log(photo.length > 300);
	return (
		<Col md={12}>
			<div className={style.userInfo}>
				<Row className=" g-3 justify-content-center">
					<Col md={1}>
						<div className="text-center">
							<h6>Photo</h6>
							<img
								src={
									photo.length < 400 ? photo : "data:image/jpeg;base64," + photo
								}
								alt="user"
								className="img-fluid rounded-circle"
							/>
						</div>
					</Col>
					<Col md={4}>
						<div className="text-center">
							<h6>Name</h6>
							<p>{displayName}</p>
						</div>
					</Col>
					<Col md={4}>
						<div className="text-center">
							<h6>Email</h6>
							<p>{email}</p>
						</div>
					</Col>
					<Col md={1}>
						<div className="text-center">
							<h6>Role</h6>
							<p className="bg-success text-white rounded small">{role}</p>
						</div>
					</Col>
					<Col md={2}>
						<div className="text-center">
							<h6>Action</h6>
							{role === "user" ? (
								<button className="btn btn-outline-success">Make Admin</button>
							) : (
								<button className="btn btn-outline-danger">Make User</button>
							)}
						</div>
					</Col>
				</Row>
			</div>
		</Col>
	);
}

export default ShowAllUsers;
