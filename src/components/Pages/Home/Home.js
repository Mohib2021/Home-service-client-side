import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Contact from "./Contact/Contact";
import HeroSection from "./HeroSection/HeroSection";
import LatestDesign from "./LatestDesign/LatestDesign";
import Service from "./Service/Service";
import Testimonial from "./Testimonial/Testimonial";

function Home() {
	return (
		<div>
			<Header />
			<HeroSection />
			<LatestDesign />
			<Service />
			<Testimonial />
			<Contact />
			<Footer />
		</div>
	);
}

export default Home;
