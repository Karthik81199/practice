import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page1 from "./components/Page1/Page1";
import Nav from "./components/navigation";
import Side from "./components/sidepanel";
import Page2 from "./components/Page2/Page2";

// function App() {
// 	return (
// 		<div className="RouteHolder">
// 			<Router>
// 				<Routes>
// 					<Route path="/" element={<Page1 />}></Route>
// 					<Route path="/Projects" element={<Project />}></Route>
// 				</Routes>
// 			</Router>
// 		</div>
// 	);
// }

function App() {
	return (
		<div className="flex flex-col h-screen">
			<Nav />
			<div className="flex flex-1 overflow-hidden">
				<Router>
					<Side />
					<Routes>
						<Route path="/" element={<Page1 />}></Route>
						<Route path="/2" element={<Page2 />}></Route>
					</Routes>
				</Router>
			</div>
		</div>
	);
}
export default App;
