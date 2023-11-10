const svgInline = () => {
	console.log('convertImages - start')
	console.log('convertImages - start')
	console.log('convertImages - start')

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

				if (!image.parentNode) return

				image.parentNode.replaceChild(svg, image)
			})
			.then(() => {
				image.classList.add('active')

				image.classList.remove('js-svg-inline')
				image.classList.add('xxxxxxxxxxxxx')
			})
			.catch(error => console.error(error))
	})
}

export default svgInline