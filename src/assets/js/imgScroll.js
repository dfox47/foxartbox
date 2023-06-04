const imgScroll = () => {
	const changeImgSrc = () => {
		document.querySelectorAll('.js-img-scroll').forEach((e) => {
			if (window.pageYOffset + window.innerHeight > e.getBoundingClientRect().top) {
				e.classList.remove('js-img-scroll')

				// create img element
				const $img          = document.createElement('img')
				let $classList      = e.className
				const $src          = e.dataset.src

				if (!$src) return

				// copy all classes from span to img
				if ($classList) {
					$classList.split(' ').forEach((c) => {
						$img.classList.add(c)
					})
				}

				$img.src = $src

				// alt text
				$img.alt = e.title ? e.title : ''

				// append img
				e.after($img)

				// remove main element (span)
				e.remove()
			}
		})
	}

	window.addEventListener('orientationChange', changeImgSrc)

	window.addEventListener('resize', changeImgSrc)

	window.addEventListener('scroll', changeImgSrc)

	changeImgSrc()
}

export default imgScroll