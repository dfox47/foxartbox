const flatten = () => {
	function flatten(array) {
		return JSON.stringify(array).replace(/[[\]]/g, '').split()
	}

	console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]
}

export default flatten