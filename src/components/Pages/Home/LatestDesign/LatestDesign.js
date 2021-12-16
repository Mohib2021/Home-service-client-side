import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import style from "./LatestDesign.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
function LatestDesign() {
	const locationIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />;
	return (
		<div className="my-5">
			<div className="text-center my-5">
				<h6>Projects</h6>
				<h3 className="fw-bold">
					Discover the latest Design <br /> Available today{" "}
				</h3>
			</div>
			<Container>
				<Row className="g-4">
					<Col md={4} sm={12}>
						<Card style={{ borderRadius: "10px" }} className={style.card}>
							<Card.Img
								variant="top"
								src="https://i.ibb.co/L9s5t4D/bernard-hermant-6ft-Zu-O-b64-unsplash-1.png"
							/>
							<Card.Body className="text-center">
								<Card.Title className="fw-bold ">
									Villa on Washington Avenue
								</Card.Title>
								<Card.Text> {locationIcon} Dhaka, Bangladesh</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4} sm={12}>
						<Card style={{ borderRadius: "10px" }} className={style.card}>
							<Card.Img
								variant="top"
								src="https://i.ibb.co/kKkn4JW/Mask-Group.png"
							/>
							<Card.Body className="text-center">
								<Card.Title className="fw-bold">
									Luxury Villa in Rogo Park
								</Card.Title>
								<Card.Text> {locationIcon} Dhaka Bangladesh</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4} sm={12}>
						<Card style={{ borderRadius: "10px" }} className={style.card}>
							<Card.Img
								variant="top"
								src="https://i.ibb.co/K0YkQdQ/Mask-Group-1.png"
							/>
							<Card.Body className="text-center">
								<Card.Title className="fw-bold">Gorgeous House</Card.Title>
								<Card.Text> {locationIcon} Dhaka, Bangladesh</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default LatestDesign;
