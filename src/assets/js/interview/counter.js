// https://leetcode.com/problems/counter/
//
// Given an integer n, return a counter function.
// This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

const counter = () => {
	function createCounter(n) {
		let count = n

		return function() {
			const currentValue = count

			count++

			return currentValue
		}
	}

	const counter = createCounter(10)
	counter() // 10
	counter() // 11
	counter() // 12
}

export default counter