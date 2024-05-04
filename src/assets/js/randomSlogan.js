const randomSlogan = () => {
	document.querySelectorAll('.js-random-slogan').forEach((e) => {
		const delay = 4000

		const randomSlogan = () => {
			const slogans = [
				"Believe in miracles & JavaScript",
				"Earned. Not given",
				"Eat. Sleep. Code. Repeat",
				"Fast websites",
				"Mobile friendly. Only",
				"Satisfied client. Always",
				"W3C standards",
				"Websites support"
			]

			e.innerHTML = slogans[Math.floor(Math.random() * slogans.length)]

			e.classList.remove('active')

			setTimeout(() => {
				e.classList.add('active')
			}, delay - 1000)
		}

		randomSlogan()

		setInterval(function () {
			randomSlogan()
		}, delay)
	})



	const canvas    = document.querySelector('.js-home-block-desc')
	const ctx       = canvas.getContext('2d')
	const textStr   = 'FOXARTBOX'

	const canvasH = canvas.height   = canvas.clientHeight
	const canvasW = canvas.width    = canvas.clientWidth

	const grad = ctx.createLinearGradient(0,0,canvasW,0)
	grad.addColorStop(0, '#640d6b')
	grad.addColorStop(1, '#ee0979')

	const windowWidth = window.innerWidth

	let fontSize = 100

	if (windowWidth < 660) {
		fontSize = 50
	}
	else if (windowWidth < 980) {
		fontSize = 70
	}

	ctx.font = '700 ' + fontSize + 'px Arial, Helvetica, sans-serif'
	ctx.fillStyle = grad
	ctx.textAlign = 'center'
	ctx.textBaseline = 'middle'
	ctx.strokeStyle = '#000'
	ctx.lineWidth = 2

	ctx.fillText(textStr , canvasW / 2, canvasH / 2)
	ctx.strokeText(textStr , canvasW / 2, canvasH / 2)
}

export default randomSlogan