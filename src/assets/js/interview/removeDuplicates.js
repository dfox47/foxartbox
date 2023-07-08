const removeDuplicates = () => {
	function removeDu(str) {
		return Array.from(new Set(str)).join('')
	}

	console.log('--------------------------')
	console.log(removeDu('abcd')) // -> 'abcd'
	console.log(removeDu('aabbccdd')) // -> 'abcd'
	console.log(removeDu('abcddbca')) // -> 'abcd'
	console.log(removeDu('abababcdcdcd')) // -> 'abcd'
}

export default removeDuplicates