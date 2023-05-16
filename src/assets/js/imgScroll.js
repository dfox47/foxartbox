const imgScroll = () => {
	const changeImgSrc = () => {
		document.querySelectorAll('.js-img-scroll').forEach((e) => {
			if (window.pageYOffset + window.innerHeight > e.offsetTop) {
				e.classList.remove('js-img-scroll')

				// create img element
				let $img            = document.createElement('img')
				let $classList      = e.className

				// copy all classes from span to img
				if ($classList) {
					$classList.split(' ').forEach((e) => {
						$img.classList.add(e)
					})
				}

				$img.src = e.dataset.src

				// append img
				e.after($img)

				// remove span
				e.remove()
			}
		})
	}

	changeImgSrc()

	window.addEventListener('resize', function() {
		changeImgSrc()
	})

	window.addEventListener('scroll', function() {
		changeImgSrc()
	})
}

export default imgScroll