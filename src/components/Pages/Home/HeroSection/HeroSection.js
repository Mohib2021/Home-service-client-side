import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import style from "./HeroSection.module.css";
function HeroSection() {
	const navigate = useNavigate();
	return (
		<div className="my-5">
			<Container>
				<Row className="justify-content-between align-items-center g-4">
					<Col md={5} sm={12} className="order-1 order-md-0">
						<div>
							<h1 className={style.mainHeading}>
								We Build <br /> Your Dream
							</h1>
							<p>
								The trusted online platform to make your home with highly
								decorated. We provide all of the services with customer's
								satisfaction.
							</p>
							<button
								onClick={() => navigate("/explore")}
								className="btn btn-dark"
							>
								Get Services
							</button>
						</div>
					</Col>
					<Col md={6} sm={12} className="order-0 order-md-1">
						<div>
							<img
								className="img-fluid"
								src="https://i.ibb.co/tc5Gt4q/hero-img.png"
								alt="hero-img"
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default HeroSection;
