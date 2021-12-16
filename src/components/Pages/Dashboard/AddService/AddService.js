import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./AddService.module.css";
function AddService() {
	return (
		<div className="my-5">
			<Container>
				<Row className="justify-content-center align-items-center">
					<Col md={6} sm={12}>
						<form className={style.form} action="">
							<div className="text-center mb-4">
								<h3>Add a Service here</h3>
							</div>
							<input
								placeholder="Service name"
								type="text"
								className="form-control mb-3"
							/>
							<input
								placeholder="Price"
								type="text"
								className="form-control mb-3"
							/>
							<input type="file" className="form-control mb-3" />
							<textarea
								cols="30"
								rows="7"
								placeholder="Description"
								className="mb-3 form-control"
							></textarea>
							<input
								type="submit"
								value="Add Service"
								className="btn btn-secondary"
							/>
						</form>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default AddService;
