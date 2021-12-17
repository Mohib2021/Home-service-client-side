import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../useAuth/useAuth";

const PrivetAdminRoute = ({ children }) => {
	const { user } = useAuth();
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);
	const findUser = users.find((singleUser) => singleUser.email === user.email);
	if (findUser?.role === "admin") {
		return children;
	} else {
		return <Navigate to="/home" />;
	}
};

export default PrivetAdminRoute;
