import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
	const data = {
		labels: ["yellow", "Blue", "white"],
		datasets: [
			{
				data: [150, 100, 100],
				backgroundColor: ["#EE8728", "#0979BB", "#FFFFFF"],
				hoverBackgroundColor: ["#EE8728", "#0979BB", "#FFFFFF"],
				borderWidth: 1,
			},
		],
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
	};

	return (
		<>
			<div className="max-w-xs md:max-w-md lg:max-w-lg md:max-h-md bg-white mt-4 rounded-[20px] ml-3 shadow-custom-blue">
				<div className="flex heading h-auto justify-between mx-3 mt-3">
					<h3 className="font-nunito text-lg font-semibold">
						Heading of Donut Chart
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
				<div className="w-full h-64 mt-8 px-3">
					<Doughnut data={data} options={options} />
				</div>
			</div>
		</>
	);
};

export default DonutChart;
