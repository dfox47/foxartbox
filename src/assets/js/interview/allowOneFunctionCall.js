// https://leetcode.com/problems/allow-one-function-call/

// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

const allowOneFunctionCall = () => {
	/**
	 * @param {Function} fn
	 * @return {Function}
	 */

	const once = function(fn) {
		let runsCount = 0

		return function(...args) {
			if (runsCount > 0) return undefined

			runsCount++

			return fn(...args)
		}
	}

	let fn = (a,b,c) => (a + b + c)
	let onceFn = once(fn)

	onceFn(1,2,3) // 6
	onceFn(2,3,6) // returns undefined without calling fn
}

export default allowOneFunctionCall