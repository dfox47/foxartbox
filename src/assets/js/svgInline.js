const svgInline = () => {
	const images = document.querySelectorAll('.js-svg-inline')

	if (!images) return

	images.forEach(image => {
		fetch(image.dataset.src)
			.then(res => res.text())
			.then(data => {
				const parser = new DOMParser()
				const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg')

				if (!svg) return

				if (image.id) svg.id = image.id

				if (image.className) svg.classList = image.classList

				svg.classList.remove('js-svg-inline')

				if (!image.parentNode) return

				image.parentNode.replaceChild(svg, image)
			})
			.catch(error => console.error(error))
	})
}

export default svgInline