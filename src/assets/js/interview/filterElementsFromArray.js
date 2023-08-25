// https://leetcode.com/problems/filter-elements-from-array/
//
// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
//
// The fn function takes one or two arguments:
//
//     arr[i] - number from the arr
//     i - index of arr[i]
//
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.
//
// Please solve it without the built-in Array.filter method.

const filterFromArr = () => {
	/**
	 * @param {number[]} arr
	 * @param {Function} fn
	 * @return {number[]}
	 */

	// 1st test
	const arr = [0,10,20,30]
	const fn = function greaterThan10(n) {return n > 10}

	// 2st test
	const arr2 = [1,2,3]
	const fn2 = function firstIndex(n, i) {return i === 0}

	// 3d test
	const arr3 = [-2,-1,0,1,2]
	const fn3 = function plusOne(n) {return n + 1}

	let filter = (arr, fn) => {
		let filteredArr = []

		for (let i=0; i < arr.length; i++) {
			const itemVal = arr[i]

			if (fn(itemVal, i)) filteredArr.push(itemVal)
		}

		return filteredArr
	}

	filter(arr, fn)
	filter(arr2, fn2)
	filter(arr3, fn3)
}

export default filterFromArr