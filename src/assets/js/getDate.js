// theme change
const getDate = () => {
	const $clocks = document.querySelectorAll('.js-clock')

	if (!$clocks) return

	const today = new Date()
	const clockMinutes  = today.getUTCMinutes()
	const clockSeconds  = today.getUTCSeconds()

	$clocks.forEach((e) => {
		const $gmt = e.dataset.gmt ? e.dataset.gmt : 0

		let clockHours = today.getUTCHours() + +$gmt

		if (clockHours > 23) {
			clockHours = clockHours - 24
		}

		// dark mode
		if (clockHours > 19 || clockHours < 8) {
			e.classList.add('clock--dark')
		}

		e.querySelector('.js-clock-hours').style.transform     = 'rotate(' + (30 * clockHours + today.getUTCMinutes() / 2) + 'deg)'
		e.querySelector('.js-clock-minutes').style.transform   = 'rotate(' + (6 * clockMinutes) + 'deg)'
		e.querySelector('.js-clock-seconds').style.transform   = 'rotate(' + (6 * clockSeconds) + 'deg)'

		e.querySelector('.js-clock-digital').innerHTML = ('0' + clockHours).slice(-2) + ':' + ('0' + clockMinutes).slice(-2)
	})
}

export default getDate