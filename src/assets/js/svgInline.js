// $(window).bind("load", function() {
// 	// replace SVG with inline SVG code to change color with CSS
// 	$('img.svg, img.js-svg').each(function() {
// 		let $img        = $(this)
// 		let imgID       = $img.attr('id')
// 		let imgClass    = $img.attr('class')
// 		let imgURL      = $img.attr('src')
//
// 		$.get(imgURL, function(data) {
// 			// Get the SVG tag, ignore the rest
// 			let $svg = $(data).find('svg')
//
// 			// Add replaced image's ID to the new SVG
// 			if (typeof imgID !== 'undefined') {
// 				$svg = $svg.attr('id', imgID)
// 			}
//
// 			// Add replaced image's classes to the new SVG
// 			if (typeof imgClass !== 'undefined') {
// 				$svg = $svg.attr('class', imgClass+' replaced-svg')
// 			}
//
// 			// Remove any invalid XML tags as per http://validator.w3.org
// 			$svg = $svg.removeAttr('xmlns:a')
//
// 			// Replace image with new SVG
// 			$img.replaceWith($svg)
//
// 		}, 'xml')
// 	})
// })

const svgInline = () => {
	console.log('convertImages - start')

	const images = document.querySelectorAll('.js-svg-inline')

	images.forEach(image => {
		fetch(image.dataset.src)
			.then(res => res.text())
			.then(data => {
				const parser = new DOMParser()
				const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg')

				if (image.id) svg.id = image.id
				if (image.className) svg.classList = image.classList

				image.parentNode.replaceChild(svg, image)

				// image.classList.remove('js-svg-inline')
			})
			.then()
			.catch(error => console.error(error))
	})

	console.log('convertImages - END')
}

export default svgInline