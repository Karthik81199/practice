import React from "react";
import Heading from "./Heading";
import Graph from "./Graph";
import LineChart from "./LineChart";
import "../../assets/styles/tailwind.css";
import Table from "./Table";
import DonutChart from "./DonutChart";

export default function Page1() {
	return (
		<section className="page1-sec-1 md:w-full bg-pageBG no-scrollbar overflow-y-scroll overflow-x-hidden">
			<div className="mt-3 flex md:flex-row sm:flex-col flex-col md:justify-between w-full overflow-hidden">
				<Heading />
				<Heading />
				<Heading />
			</div>
			<div className="mt-6 flex md:flex-row flex-wrap sm:flex-col flex-col md:justify-evenly w-full overflow-hidden">
				<Graph />
				<Table />
			</div>
			<div className="mt-6 flex md:flex-row flex-wrap sm:flex-col flex-col md:justify-evenly w-full overflow-hidden">
				<LineChart />
				<DonutChart />
			</div>
		</section>
	);
}
