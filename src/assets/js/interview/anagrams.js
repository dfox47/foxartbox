const anagrams = () => {
	function allAnagrams(array) {
		const sorted = array.map(str => str.split('').sort().join(''))

		for (let i in sorted) {
			if (sorted[i] !== sorted[0]) {
				return false
			}
		}

		return true
	}

	console.log('true ? ', allAnagrams(['abcd', 'bdac', 'cabd']))
	console.log('false ? ', allAnagrams(['abcd', 'bdXc', 'cabd']))
}

export default anagrams