const tableColorChanged = (color) => {
	if (!color) return

	document.querySelector('.js-table-preview').dataset.theme = color

	tablePrice()
}

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
	document.querySelector('.js-table-item__' + name).classList.toggle('active', document.querySelector('.js-table-option[data-type="' + name + '"]').checked)
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