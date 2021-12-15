import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
function Header() {
	const [isActive, setIsActive] = useState(false);
	const { user, logOut } = useAuth();
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
						{user.displayName ? (
							<Nav.Link>
								<button
									onClick={logOut}
									className="btn fw-bold btn-outline-danger"
								>
									LogOut
								</button>
							</Nav.Link>
						) : (
							<Nav.Link as={Link} to="/login">
								<button className="btn fw-bold btn-outline-primary">
									Login
								</button>
							</Nav.Link>
						)}
						{!user.displayName && (
							<Nav.Link as={Link} to="/signUp">
								<button className="btn fw-bold btn-outline-primary">
									SignUp
								</button>
							</Nav.Link>
						)}
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
