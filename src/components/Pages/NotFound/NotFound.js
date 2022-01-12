import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import styles from "./NotFound.module.css";
function NotFound() {
	return (
		<div style={{ overflowX: "hidden" }}>
			<Header />
			<Row className="justify-content-center mb-5">
				<Col md={6}>
					<img
						src="https://i.ibb.co/Tq6Mtmj/Page-not-found.png"
						alt="page-not-found"
						className={styles.notFound}
					/>
					<div className="text-center">
						<Link to="./home">
							<button className="btn btn-dark ">Go Home</button>
						</Link>
					</div>
				</Col>
			</Row>
			<Footer />
		</div>
	);
}

export default NotFound;
