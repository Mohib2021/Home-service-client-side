import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/home" element={<Home />}></Route>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
