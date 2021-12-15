import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import style from "./SignUp.module.css";
function SignUp() {
	// getting function form useFirebase by calling useAuth hook
	const {
		error,
		getUserName,
		getUserEmail,
		loginWithGoogle,
		getUserPassword,
		getConfirmPassword,
		registerWithEmailAndPassword,
	} = useAuth();

	return (
		<div className="my-5">
			<Container>
				<Row className=" form-container align-items-center justify-content-center">
					<Col md={6}>
						<Form
							data-aos="fade-down"
							onSubmit={registerWithEmailAndPassword}
							className={`p-3 ${style.formShadow}`}
						>
							<div className="text-center">
								<img
									className={style.logoImg}
									src="https://i.ibb.co/T47rtw9/Screenshot-2021-12-14-235848-removebg-preview.png"
									alt="logo-img"
								/>
							</div>
							<div className="text-center my-4">
								<h3 className="fw-bold">Sign Up</h3>
							</div>
							<Form.Group className="mb-3" controlId="formBasicName">
								<Form.Label>Full Name</Form.Label>
								<Form.Control
									onChange={getUserName}
									type="name"
									placeholder="Name"
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Email Address</Form.Label>
								<Form.Control
									onChange={getUserEmail}
									type="email"
									placeholder="Enter email"
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									onChange={getUserPassword}
									type="password"
									placeholder="Password"
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicConfirmPassword">
								<Form.Label>Confirm Password</Form.Label>
								<Form.Control
									onChange={getConfirmPassword}
									type="password"
									placeholder="Re-enter Password"
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicConfirmImg">
								<Form.Label>Your Image</Form.Label>
								<Form.Control type="file" />
							</Form.Group>
							<Button className="w-100" variant="dark" type="submit">
								Sign up
							</Button>
							<p className="mt-2">
								Already have an account? <Link to="/login">Login</Link>
							</p>
							{error && <p> {error} </p>}
							<div className="d-flex justify-content-center">
								<img
									onClick={loginWithGoogle}
									style={{ width: "70px", cursor: "pointer" }}
									className="me-3"
									src="https://i.ibb.co/GR8QvhF/google.png"
									alt="google icon"
								/>
								<img
									// onClick={signUpUsingGitHub}
									style={{ width: "70px", cursor: "pointer" }}
									src="https://i.ibb.co/YNH5VxS/github.png"
									alt="github icon"
								/>
							</div>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default SignUp;
