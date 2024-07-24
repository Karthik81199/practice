import React from "react";

function Table() {
	return (
		<div className=" bg-white mt-4 rounded-[20px] ml-3 container max-w-xs md:max-w-md lg:max-w-lg shadow-custom-blue">
			<div className="flex heading h-auto justify-between mx-3 mt-6">
				<h3 className="font-nunito text-lg font-semibold">
					Heading of Table Components
				</h3>
				<h3 className="font-nunito text-lg font-semibold">
					<u>View All</u>
				</h3>
			</div>
			<div className="container max-w-xs sm:text-sm text-xs md:text-md sm:max-w-sm md:max-w-lg lg:max-w-2xl mt-2 lg:mt-10 md:mt-4 flex justify-center mb-4 p-2 lg:p-4">
				<table>
					<thead>
						<tr className="flex rounded-xl  bg-tableColor justify-center items-center font-nunito lg:text-lg text-sm md:space-x-1 lg:h-12">
							<th>Colm 1</th>
							<th>Colm 1</th>
							<th>Colm 1</th>
							<th>Colm 1</th>
							<th>Colm 1</th>
							<th>Colm 1</th>
							<th>Colm 1</th>
						</tr>
					</thead>
					<tbody>
						<tr className="flex border justify-between h-11 items-center font-nunito text-xs md:text-md font-semibold">
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
						</tr>
						<tr className="flex border justify-between h-11 items-center font-nunito text-xs md:text-md font-semibold">
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
						</tr>
						<tr className="flex border justify-between h-11 items-center font-nunito text-xs md:text-md font-semibold">
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
						</tr>
						<tr className="flex border justify-between h-11 items-center font-nunito text-xs md:text-md font-semibold">
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
						</tr>
						<tr className="flex border justify-between h-11 items-center font-nunito text-xs md:text-md font-semibold">
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Table;
