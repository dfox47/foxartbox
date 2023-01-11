// set theme from localStorage
const themeFromLocalStorage = () => {
	document.querySelector('html').dataset.theme = localStorage.getItem('theme') ?? ''
}

export default themeFromLocalStorage