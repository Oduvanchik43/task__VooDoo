/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
		colors: {
			mainColor: '#FCF7E6'
		},
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1028px',
			xl: '1200px'
		},
		fontSize: {
			xs: ['12px', '15px'],
			sm: ['14px', '18px'],
			sml: ['14px','21px'],
			base: ['16px', '20px'],
			xl:	['20px', '26px'],
		}
	},
  },
  plugins: [],
}

