// https://leetcode.com/problems/apply-transform-over-each-element-in-array/
//
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

const counter = () => {
	/**
	 * @param {number[]} arr
	 * @param {Function} fn
	 * @return {number[]}
	 */

	const arr = [1,2,3]
	const fn = function plusone(n) {return n + 1}
	// Output: [2,3,4]

	const arr2 = [1,2,3]
	const fn2 = function plusI(n, i) {return n + i}
	// Output: [1,3,5]

	const arr3 = [10,20,30]
	const fn3 = function constant() {return 42}
	// Output: [42,42,42]

	const map = function(arr, fn) {
		const filteredArr = []

		for (let i = 0; i < arr.length; i++) {
			filteredArr.push(fn(arr[i], i))
		}

		return filteredArr
	}

	console.log('---------------------')
	map(arr, fn)
	map(arr2, fn2)
	map(arr3, fn3)
}

export default counter

// Example 1:
// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one.

// Example 2:
// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.

// Example 3:
// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.
