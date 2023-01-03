// scroll to the block with ID
const scrollTo = (id) => {
	const e = document.getElementById(id.replace('/#', '').replace('#', ''))

	// if there is no element with ID to scroll
	if (!e) {
		window.location.href = id

		return
	}

	// scroll to element
	e.scrollIntoView({
		behavior: 'smooth'
	})
}

export default scrollTo