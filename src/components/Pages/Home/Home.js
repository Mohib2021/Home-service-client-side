import React from "react";
import Contact from "./Contact/Contact";
import HeroSection from "./HeroSection/HeroSection";
import LatestDesign from "./LatestDesign/LatestDesign";
import Service from "./Service/Service";
import Testimonial from "./Testimonial/Testimonial";

function Home() {
	return (
		<div>
			<HeroSection />
			<LatestDesign />
			<Service />
			<Testimonial />
			<Contact />
		</div>
	);
}

export default Home;
