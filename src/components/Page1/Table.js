import React from "react";

function Table() {
	return (
		<div className=" bg-white mt-4 rounded-[20px] ml-3 container max-w-xs md:max-w-md lg:max-w-lg">
			<div className="flex heading h-auto justify-between mx-3 mt-3">
				<h3 className="font-nunito text-lg font-semibold">
					Heading of Table Components
				</h3>
				<h3 className="font-nunito text-lg font-semibold">
					<u>View All</u>
				</h3>
			</div>
			<div className="container max-w-xs sm:text-sm text-xs md:text-md sm:max-w-sm md:max-w-md lg:max-w-[1440px] mt-2 px-2 flex justify-center">
				<table>
					<thead>
						<tr className="flex rounded-xl  bg-tableColor justify-center items-center font-nunito lg:text-lg">
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
						<tr className="flex border justify-between h-11 items-center font-nunito sm:text-sm text-xs md:text-md font-semibold">
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
						</tr>
						<tr className="flex border justify-between h-11 items-center font-nunito sm:text-sm text-xs md:text-md font-semibold">
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
						</tr>
						<tr className="flex border justify-between h-11 items-center font-nunito sm:text-sm text-xs md:text-md font-semibold">
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
						</tr>
						<tr className="flex border justify-between h-11 items-center font-nunito sm:text-sm text-xs md:text-md font-semibold">
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
						</tr>
						<tr className="flex border justify-between h-11 items-center font-nunito sm:text-sm text-xs md:text-md font-semibold">
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
