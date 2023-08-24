const arrayPrototypeLast = () => {
	Array.prototype.last = function() {
		if (this.length === 0) {
			return -1
		}

		return this[this.length - 1]
	}

	/**
	 * const arr = [1, 2, 3];
	 * arr.last(); // 3
	 */

	// Example usage
	const jsonString = '[1, 2, 3, 4]'
	const parsedArray = JSON.parse(jsonString)

	console.log(parsedArray.last()); // Output: 4
}

export default arrayPrototypeLast