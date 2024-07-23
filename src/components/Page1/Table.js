import React from "react";

function Table() {
	return (
		<div className="w-1/3 min-w-[589px] h-[408px] bg-white mt-4 rounded-[20px] ml-3">
			<div className="flex heading h-auto justify-between mx-3 mt-3">
				<h3 className="font-nunito text-lg font-semibold">
					Heading of Table Components
				</h3>
				<h3 className="font-nunito text-lg font-semibold">
					<u>View All</u>
				</h3>
			</div>
			<div className="flex mt-8 justify-center">
				<table>
					<thead>
						<tr className="flex rounded-xl space-x-3 bg-tableColor h-11 justify-center items-center font-nunito text-lg">
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
						<tr className="flex border justify-between h-11 items-center font-nunito text-sm font-semibold">
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
						</tr>
						<tr className="flex border justify-between h-11 items-center font-nunito text-sm font-semibold">
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
						</tr>
						<tr className="flex border justify-between h-11 items-center font-nunito text-sm font-semibold">
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
						</tr>
						<tr className="flex border justify-between h-11 items-center font-nunito text-sm font-semibold">
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
							<td>Colm 1</td>
						</tr>
						<tr className="flex border justify-between h-11 items-center font-nunito text-sm font-semibold">
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
