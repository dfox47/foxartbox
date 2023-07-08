const isEqual = () => {
	const equalInput        = document.querySelector('.js-equality-input')
	const equalResult       = document.querySelector('.js-equality-result')

	const equalInputChanged = (e) => {
		equalResult.innerHTML = isMirrored(e.target.value)
	}

	equalInput.addEventListener('input', equalInputChanged)

	const isMirrored = (str) => {
		if (!str) return

		let isEqual = true

		const arrayFromStr = str.replace(/[^a-zA-Z0-9]+/g, '').split('')

		for (let i = 0; i < arrayFromStr.length; i++) {
			if (arrayFromStr[i] !== arrayFromStr.slice().reverse()[i]) {
				isEqual = false
			}
		}

		return isEqual
	}
}

export default isEqual