import { Navigate } from "react-router-dom";
import useAuth from "../../useAuth/useAuth";

const PrivetAdminRoute = ({ children }) => {
	const { singleUser } = useAuth();

	if (singleUser.role === "admin") {
		return children;
	} else {
		return <Navigate to="/home" />;
	}
};

export default PrivetAdminRoute;
