import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ShowAllUsers from "./ShowAllUsers/ShowAllUsers";

function AllUsers() {
	const [allUsers, setAllUsers] = useState([]);
	useEffect(() => {
		fetch("https://murmuring-lowlands-26250.herokuapp.com/users")
			.then((res) => res.json())
			.then((data) => setAllUsers(data));
	}, []);

	return (
		<div className="my-5">
			<Container>
				<div className="text-center mb-5">
					<h6>Show</h6>
					<h3>All of the Users</h3>
				</div>
				<Row className="g-4">
					{allUsers.map((user) => (
						<ShowAllUsers key={user._id} data={user} />
					))}
				</Row>
			</Container>
		</div>
	);
}

export default AllUsers;
