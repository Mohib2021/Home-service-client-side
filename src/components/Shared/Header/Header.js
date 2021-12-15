import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
function Header() {
	const [isActive, setIsActive] = useState(false);
	return (
		<div className={style.position}>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand as={Link} to="/home">
						<img
							className={style.logoImg}
							src="https://i.ibb.co/T47rtw9/Screenshot-2021-12-14-235848-removebg-preview.png"
							alt="service-logo"
						/>
					</Navbar.Brand>
					<div
						className={`ms-auto ${style.navigationLink} ${
							isActive && style.animation
						} `}
					>
						<Nav.Link className="active" as={Link} to="/home">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/explore">
							Explore
						</Nav.Link>
						<Nav.Link as={Link} to="/dashboard">
							Dashboard
						</Nav.Link>
						<Nav.Link as={Link} to="">
							<button className="btn fw-bold btn-primary">Login</button>
						</Nav.Link>
					</div>
					<div
						onClick={() => setIsActive(!isActive)}
						className={`${style.burger} ${isActive && style.toggle}`}
					>
						<div className={style.line1}></div>
						<div className={style.line2}></div>
						<div className={style.line3}></div>
						<div className={style.line4}></div>
					</div>
				</Container>
			</Navbar>
		</div>
	);
}

export default Header;
