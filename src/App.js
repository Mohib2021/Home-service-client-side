import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Login from "./components/Pages/Login/Login";
import SignUp from "./components/Pages/SignUp/SignUp";
import AuthProvider from "./components/Hooks/AuthProvider/AuthProvider";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import OrderList from "./components/Pages/Dashboard/OrderList/OrderList";
import Pay from "./components/Pages/Dashboard/Pay/Pay";
import Review from "./components/Pages/Dashboard/Review/Review";
import HandleService from "./components/Pages/Dashboard/HandleService/HandleService";
import AddService from "./components/Pages/Dashboard/AddService/AddService";
import ManageBooking from "./components/Pages/Dashboard/ManageBooking/ManageBooking";
import AllUsers from "./components/Pages/Dashboard/AllUsers/AllUsers";
import Explore from "./components/Pages/Explore/Explore";
import Booking from "./components/Pages/Booking/Booking";
import NotFound from "./components/Pages/NotFound/NotFound";
import PrivetUserRoute from "./components/Hooks/PrivetRoute/PrivetUserRoute/PrivetUserRoute";
import PrivetAdminRoute from "./components/Hooks/PrivetRoute/PrivetAdminRoute/PrivetAdminRoute";

function App() {
	return (
		<Router>
			<AuthProvider>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/home" element={<Home />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/signUp" element={<SignUp />}></Route>
					<Route path="/explore" element={<Explore />}></Route>
					<Route
						path="/booking/:id"
						element={
							<PrivetUserRoute>
								<Booking />
							</PrivetUserRoute>
						}
					></Route>
					<Route
						path="/dashboard"
						element={
							<PrivetUserRoute>
								<Dashboard />
							</PrivetUserRoute>
						}
					>
						<Route path="/dashboard" element={<Review />} />
						<Route path="orderList" element={<OrderList />} />
						<Route path="pay/:payId" element={<Pay />} />
						<Route path="review" element={<Review />} />
						<Route
							path="handleService"
							element={
								<PrivetAdminRoute>
									<HandleService />
								</PrivetAdminRoute>
							}
						/>
						<Route
							path="addService"
							element={
								<PrivetAdminRoute>
									<AddService />
								</PrivetAdminRoute>
							}
						/>
						<Route
							path="manageBooking"
							element={
								<PrivetAdminRoute>
									<ManageBooking />
								</PrivetAdminRoute>
							}
						/>
						<Route
							path="allUsers"
							element={
								<PrivetAdminRoute>
									<AllUsers />
								</PrivetAdminRoute>
							}
						/>
					</Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</AuthProvider>
		</Router>
	);
}

export default App;
