import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Login from "./components/Pages/Login/Login";
import SignUp from "./components/Pages/SignUp/SignUp";
import AuthProvider from "./components/Hooks/AuthProvider/AuthProvider";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import DashboardHome from "./components/Pages/Dashboard/DashboardHome/DashboardHome";
import OrderList from "./components/Pages/Dashboard/OrderList/OrderList";
import Pay from "./components/Pages/Dashboard/Pay/Pay";
import Review from "./components/Pages/Dashboard/Review/Review";
import HandleService from "./components/Pages/Dashboard/HandleService/HandleService";
import AddService from "./components/Pages/Dashboard/AddService/AddService";
import ManageBooking from "./components/Pages/Dashboard/ManageBooking/ManageBooking";
import AllUsers from "./components/Pages/Dashboard/AllUsers/AllUsers";
function App() {
	return (
		<Router>
			<AuthProvider>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/home" element={<Home />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/signUp" element={<SignUp />}></Route>
					<Route path="/dashboard" element={<Dashboard />}>
						<Route path="/dashboard" element={<DashboardHome />} />
						<Route path="orderList" element={<OrderList />} />
						<Route path="pay" element={<Pay />} />
						<Route path="review" element={<Review />} />
						<Route path="handleService" element={<HandleService />} />
						<Route path="addService" element={<AddService />} />
						<Route path="manageBooking" element={<ManageBooking />} />
						<Route path="allUsers" element={<AllUsers />} />
					</Route>
				</Routes>
			</AuthProvider>
		</Router>
	);
}

export default App;
