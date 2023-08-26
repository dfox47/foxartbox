// Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
// 	A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.
// 	If the length of the array is 0, it should return init.
// 	Please solve it without using the built-in Array.reduce method.

const arrayReduceTransformation = () => {
	/**
	 * @param {number[]} nums
	 * @param {Function} fn
	 * @param {number} init
	 * @return {number}
	 */
	const nums  = [1,2,3,4]
	const fn    = function sum(accum, curr) {return accum + curr}
	const init  = 0

	const nums2 = [1,2,3,4]
	const fn2   = function sum(accum, curr) {return accum + curr * curr}
	const init2 = 100

	const nums3 = []
	const fn3   = function sum() {return 0}
	const init3 = 25

	const reduce = function(nums, fn, init) {
		let val = init

		for (let num of nums) {
			val = fn(val, num)
		}

		console.log('val | ', val)

		return val
	}

	reduce(nums, fn, init)
	reduce(nums2, fn2, init2)
	reduce(nums3, fn3, init3)
}

export default arrayReduceTransformation