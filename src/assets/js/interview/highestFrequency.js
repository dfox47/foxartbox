const highestFrequency = () => {
	function highestFrequency(array) {
		let count = {}
		let max = 0
		let maxKey = ''

		for (let i = 0; i < array.length; i++) {
			let el = array[i]

			if (count[el]) {
				count[el] += 1
			}
			else {
				count[el] = 1
			}
		}

		for (let key in count) {
			if (count[key] > max) {
				max     = count[key]
				maxKey  = key
			}
		}

		return maxKey
	}

	console.log('------------------')
	console.log('c ? ', highestFrequency(['a', 'b', 'c', 'c', 'd', 'e']))
	console.log('abc ? ', highestFrequency(['abc', 'def', 'abc', 'def', 'abc']))
	console.log('abc ? ', highestFrequency(['abc', 'def']))
	console.log('ghi ? ', highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ]))
}

export default highestFrequency