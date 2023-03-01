const tableColorChanged = (color) => {
	if (!color) return

	document.querySelector('.js-table-preview').dataset.theme = color

	tablePrice()
}

// table color from local storage
const tableColorFromStorage = () => {
	const colorFromStorage = localStorage.getItem('tableColor')

	if (!colorFromStorage) return

	document.querySelector('.js-table-preview').dataset.theme = colorFromStorage

	document.querySelectorAll('.js-table-color').forEach((e) => {
		if (colorFromStorage === e.dataset.color) {
			e.checked = true
		}
	})

	tablePrice()
}

const tableItemSelected = (name) => {
	console.log('name | ', name)
	console.log('-------------')

	document.querySelectorAll('.js-table-item[data-type="' + name + '"]').forEach((e) => {
		console.log('checked-- | ', e.checked)

		if (e.checked === true) {
			console.log('true')
		}
		else {
			console.log('false')
		}
	})
}

const tablePrice = () => {
	let totalPrice = 0

	document.querySelectorAll('.js-table-price').forEach((e) => {
		if (e.checked) {
			totalPrice += +e.dataset.price
		}
	})

	document.querySelectorAll('.js-table-price-total').forEach((e) => {
		e.innerHTML = totalPrice
	})
}

export {
	tableColorChanged,
	tableColorFromStorage,
	tableItemSelected,
	tablePrice
}