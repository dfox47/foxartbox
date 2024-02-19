const imgBg = () => {
	const changeImgBg = () => {
		document.querySelectorAll('.js-img-bg').forEach((e) => {
			if (window.pageYOffset + window.innerHeight > e.offsetTop) {
				e.classList.remove('js-img-bg')
				const imgSrc = e.dataset.src
				if (imgSrc) e.style.backgroundImage = 'url(' + imgSrc + ')'
			}
		})
	}

	changeImgBg()

	window.addEventListener('orientationChange', changeImgBg)
	window.addEventListener('resize', changeImgBg)
	window.addEventListener('scroll', changeImgBg)
}

export default imgBg