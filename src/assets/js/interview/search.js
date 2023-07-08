const search = () => {
	function search(array, target) {
		for (let i in array) {
			if (array[i] === target) {
				return i
			}
		}

		return -1
	}

	console.log('3 ? ', search([1, 3, 6, 13, 17], 13))
	console.log('-1 ? ', search([1, 3, 6, 13, 17], 12))
}

export default search