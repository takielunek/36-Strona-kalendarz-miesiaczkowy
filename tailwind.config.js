/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/*.{html,js}'],
	theme: {

    

		extend: {
			'Lobster': ['Lobster, cursive'],
			'Poppins': ['Poppins, sans-serif'],

      colors: {
      "purple": "#be123c",
      "red": "#fb7185",
      "grey": "#9194a2",
      "white": "#f7f7f7"
      },
		},
		container: {
			center: true,
			padding: '1rem',
			screens: {
				lg: '1124px',
				xl: '1124px',
				'2xl': '1124px',
			},
		},
	},
	plugins: [],
};
