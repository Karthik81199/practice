import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto"; // Ensure Chart.js is imported

const LineChart = () => {
	const createGradient = (ctx) => {
		const gradient = ctx.createLinearGradient(0, 0, 0, 400); // Adjust the height as needed
		gradient.addColorStop(0, "#F5831F"); // Start color
		gradient.addColorStop(1, "rgba(245, 131, 31, 0)"); // End color with transparency
		return gradient;
	};
	const createGradient1 = (ctx) => {
		const gradient = ctx.createLinearGradient(0, 0, 0, 400); // Adjust the height as needed
		gradient.addColorStop(0.002, "rgba(9, 121, 187, 0.59)"); // Start color with partial transparency
		gradient.addColorStop(1, "rgba(9, 121, 187, 0)"); // End color with full transparency
		return gradient;
	};
	// Data for the line chart
	const data = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				label: "Sales",
				data: [10, 25, 30, 20, 40, 10, 33],
				fill: true, // Fill the area under the line
				backgroundColor: function (context) {
					const chart = context.chart;
					const ctx = chart.ctx;
					return createGradient(ctx);
				},
				borderColor: "#F5831F", // Line color
				tension: 0.1, // Smoothing the line
			},
			{
				label: "Enquires",
				data: [22, 50, 53, 5, 45, 100, 15],
				fill: true, // Fill the area under the line
				backgroundColor: function (context) {
					const chart = context.chart;
					const ctx = chart.ctx;
					return createGradient1(ctx);
				},
				borderColor: "#0979BB",
				tension: 0.1, // Smoothing the line
			},
		],
	};

	// Options for the line chart
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: {
				grid: {
					display: false, // Hide x-axis grid lines
				},
				ticks: {
					color: "#000", // x-axis tick color
				},
			},
			y: {
				grid: {
					display: true, // Display y-axis grid lines
				},
				ticks: {
					color: "#000", // y-axis tick color
				},
			},
		},
		plugins: {
			legend: {
				position: "top",
			},
			tooltip: {
				callbacks: {
					label: function (context) {
						return `Value: ${context.raw}`;
					},
				},
			},
		},
	};

	return (
		<div className=" bg-white mt-2 rounded-[20px] ml-2 container max-w-xs md:max-w-lg lg:max-w-2xl md:max-h-md">
			<div className="flex heading justify-between mx-3 mt-3">
				<h3 className="font-nunito text-lg font-semibold">
					Heading of Line Chart
				</h3>
				<button
					id="dropdownDefaultButton"
					data-dropdown-toggle="dropdown"
					class="text-black font-nunito bg-pageHeading focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal text-lg  rounded-lg px-2.5 py-1 text-center inline-flex items-center"
					type="button"
				>
					Filter{" "}
					<svg
						class="w-2.5 h-2.5 ms-3"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 10 6"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m1 1 4 4 4-4"
						/>
					</svg>
				</button>
			</div>
			<div className="flex justify-center mt-6 h-2/4">
				<Line data={data} options={options} />
			</div>
		</div>
	);
};

export default LineChart;
