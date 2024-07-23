import React from "react";
import Heading from "./Heading";
import Graph from "./Graph";
import Line from "./LineChart";
import "../../assets/styles/tailwind.css";
import Table from "./Table";
import DonutChart from "./DonutChart";

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
		<section className="page1-sec-1 min-w-full h-screen bg-pageBG no-scrollbar overflow-y-scroll overflow-x-hidden">
			<div className="mt-3 flex md:flex-row sm:flex-col flex-col md:justify-between w-full">
				<Heading />
				<Heading />
				<Heading />
			</div>
			<div className="mt-6 flex md:flex-row flex-col md:justify-evenly w-full">
				<Graph />
				<Table />
			</div>
			<div className="mt-6 flex md:flex-row sm:flex-col flex-col justify-evenly w-full">
				<Line />
				<DonutChart />
			</div>
		</section>
	);
}
