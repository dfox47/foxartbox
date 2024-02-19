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
}

export default randomSlogan