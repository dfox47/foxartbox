// https://leetcode.com/problems/return-length-of-arguments-passed/

// Write a function argumentsLength that returns the count of arguments passed to it.

const returnLengthOfArgumentsPassed = () => {
	/**
	 * @return {number}
	 */

	const argumentsLength = (...args) => {
		let countLength = 0

		for (let i = 0; i < args.length; i++) {
			countLength++
		}

		return countLength
	}

	argumentsLength(5)
	argumentsLength({}, null, "3")
}

export default returnLengthOfArgumentsPassed

// Example 1:
// Input: argsArr = [5]
// Output: 1
// Explanation:
// 	argumentsLength(5); // 1
// One value was passed to the function so it should return 1.

// Example 2:
// Input: argsArr = [{}, null, "3"]
// Output: 3
// Explanation:
// 	argumentsLength({}, null, "3"); // 3
// Three values were passed to the function so it should return 3.