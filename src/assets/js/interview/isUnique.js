const isUnique = () => {
	function test(string) {
		return JSON.stringify([...string]) === JSON.stringify([...new Set(string)])
	}

	console.log('--------------------------')
	console.log('isUnique ? ', test('abcdefgA'))
	console.log('isUnique ? ', test('abcdefg'))
	console.log('isUnique ? ', test('aaa'))
}

export default isUnique