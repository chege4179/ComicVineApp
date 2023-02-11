module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {},
		extend: {
			screens: {
				'sm': {'max': '576px'},
				'md': {'max': '768px'},
				'lg': {'max': '1024px'},

			}
		},
	},
	plugins: [],
}
