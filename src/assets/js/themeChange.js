// theme change
const themeChange = (themeName) => {
	document.querySelector('html').dataset.theme = themeName

	localStorage.setItem('theme', themeName)
}

export default themeChange