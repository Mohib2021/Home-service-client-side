import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../../useAuth/useAuth";

const PrivetUserRoute = ({ children }) => {
	const { user } = useAuth();
	const location = useLocation();
	console.log(location);
	if (user.displayName) {
		return children;
	} else {
		return <Navigate to="/login" state={{ from: location.pathname }} />;
	}
};
export default PrivetUserRoute;
