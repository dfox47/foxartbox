const arrayPrototypeLast = () => {
	Array.prototype.last = function() {
		if (this.length === 0) {
			return -1
		}

		return this[this.length - 1]
	}

	// Example usage
	const arr = '[1, 2, 3, 4]'
	const parsedArray = JSON.parse(arr)

	console.log(parsedArray.last()) // Output: 4
}

export default arrayPrototypeLast