import React from "react";
import Input from "./Input";

function Page2() {
	return (
		<section className="page2 w-screen h-screen bg-pageBG">
			<div className="ml-3 mt-4 rounded-lg flex md:flex-row sm:flex-col flex-col md:justify-between w-[87vw] h-[80vh] bg-white">
				<Input />
			</div>
		</section>
	);
}

export default Page2;
