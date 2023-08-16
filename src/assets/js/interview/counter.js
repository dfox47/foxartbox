// https://leetcode.com/problems/counter/
//
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

const counter = () => {
	/**
	 * @param {number} n
	 * @return {Function} counter
	 */
	let createCounter = function(n) {
		return function() {
			console.log('x | ', n)

			n++
		}
	}

	const counter = createCounter(10)
	counter() // 10
	counter() // 11
	counter() // 12
}

export default counter