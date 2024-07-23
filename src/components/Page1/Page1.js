import React from "react";
import Heading from "./Heading";
import Graph from "./Graph";
import Line from "./LineChart";
import "../../assets/styles/tailwind.css";
import Table from "./Table";

export default function Page1() {
	// return (
	// 	<div className="flex flex-col h-screen">
	// 		<Nav />
	// 		<div className="flex flex-1 overflow-hidden">
	// 			<Side />
	// 			<div className="">
	// 				<h3>dsdsds</h3>
	// 			</div>
	// 		</div>
	// 	</div>
	// );
	return (
		<section className="page1-sec-1 w-screen h-screen bg-pageBG overflow-y-auto">
			<div className="mt-3 flex md:flex-row sm:flex-col md:justify-between w-[89vw]">
				<Heading />
				<Heading />
				<Heading />
			</div>
			<div className="mt-6 flex md:flex-row sm:flex-col justify-evenly w-[89vw]">
				<Graph />
				<Table />
			</div>
			<div className="mt-6 flex md:flex-row sm:flex-col justify-evenly w-[89vw]">
				<Line />
			</div>
		</section>
	);
}
