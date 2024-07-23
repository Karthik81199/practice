import React from "react";
import Heading from "./Heading";
import Graph from "./Graph";
import LineChart from "./LineChart";
import "../../assets/styles/tailwind.css";
import Table from "./Table";
import DonutChart from "./DonutChart";

export default function Page1() {
	return (
		// <section className="page1-sec-1 md:w-full bg-pageBG no-scrollbar overflow-y-scroll overflow-x-hidden">
		// 	<div className="mt-3 flex md:flex-row sm:flex-col flex-col md:justify-between w-full overflow-hidden">
		// 		<Heading />
		// 		<Heading />
		// 		<Heading />
		// 	</div>
		// 	<div className="mt-6 flex md:flex-row flex-wrap sm:flex-col flex-col md:justify-evenly w-full overflow-hidden">
		// 		<Graph />
		// 		<Table />
		// 	</div>
		// 	<div className="mt-6 flex md:flex-row flex-wrap sm:flex-col flex-col md:justify-evenly w-full overflow-hidden">
		// 		<LineChart />
		// 		<DonutChart />
		// 	</div>
		// </section>
		<section className="page1-sec-1 overflow-y-scroll no-scrollbar bg-pageBG w-[90%]">
			<div className="mt-3 flex flex-wrap md:flex-nowrap md:justify-between w-full">
				<div className="flex-shrink-0 md:w-1/3 sm:w-full">
					<Heading />
				</div>
				<div className="flex-shrink-0 md:w-1/3 sm:w-full">
					<Heading />
				</div>
				<div className="flex-shrink-0 md:w-1/3 sm:w-full">
					<Heading />
				</div>
			</div>
			<div className="mt-6 flex flex-wrap md:flex-nowrap md:justify-evenly w-full">
				<div className="flex-shrink-0 md:w-1/2 sm:w-full">
					<Graph />
				</div>
				<div className="flex-shrink-0 md:w-1/2 sm:w-full">
					<Table />
				</div>
			</div>
			<div className="mt-6 flex flex-wrap md:flex-nowrap md:justify-evenly w-full">
				<div className="flex-shrink-0 md:w-1/2 sm:w-full">
					<LineChart />
				</div>
				<div className="flex-shrink-0 md:w-1/4 sm:w-full">
					<DonutChart />
				</div>
			</div>
		</section>
	);
}
