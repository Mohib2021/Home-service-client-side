import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./Login.module.css";
function Login() {
	return (
		<div>
			<Container>
				<Row className=" my-5 form-container align-items-center justify-content-center">
					<Col md={5}>
						<Form data-aos="fade-down" className={`p-3 ${style.formShadow}`}>
							<div className="text-center">
								<img
									className={style.logoImg}
									src="https://i.ibb.co/T47rtw9/Screenshot-2021-12-14-235848-removebg-preview.png"
									alt="logo-img"
								/>
							</div>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Email Address</Form.Label>
								<Form.Control
									// onChange={(e) => settingUserEmail(e.target.value)}
									type="email"
									placeholder="Enter email"
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									// onChange={(e) => settingUserPassword(e.target.value)}
									type="password"
									placeholder="Password"
								/>
							</Form.Group>
							<Button className="w-100" variant="dark" type="submit">
								Login
							</Button>
							<p className="mt-2">
								Don't have any account? <Link to="/signup">Sign up</Link>
							</p>
							{/* {error && <p className="text-danger"> {error} </p>} */}
							<div
								className={`d-flex justify-content-center ${style.loginImgIcon}`}
							>
								<img
									className="me-3"
									src="https://i.ibb.co/GR8QvhF/google.png"
									alt="google icon"
								/>

								<img
									src="https://i.ibb.co/YNH5VxS/github.png"
									alt="google icon"
								/>
							</div>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Login;
