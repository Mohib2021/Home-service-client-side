import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import Login from "./components/Pages/Login/Login";
import SignUp from "./components/Pages/SignUp/SignUp";
import AuthProvider from "./components/Hooks/AuthProvider/AuthProvider";
function App() {
	return (
		<Router>
			<AuthProvider>
				<Header />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/home" element={<Home />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/signUp" element={<SignUp />}></Route>
				</Routes>
				<Footer />
			</AuthProvider>
		</Router>
	);
}

export default App;
