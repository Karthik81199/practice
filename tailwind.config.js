/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {
			fontFamily: {
				nunito: ["Nunito", "sans-serif"],
			},
			colors: {
				pageBG: "#F8F7F7",
				sideBarNav: "#F5831F",
				toogleText: "#7E868B",
				pageHeading: "#F2F1F0",
				tableColor: "#0979BB",
				inputBr: "#EAEAEF",
				labelCl: "#0B0B0B",
				buttonCl: "#0F8AD7",
				submitbtn: "#02356A",
				submitxt:"#FAFAFA",
			},
		},
	},
	plugins: [],
};
