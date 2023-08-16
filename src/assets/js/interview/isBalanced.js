const isBalanced = () => {
	function test(string) {
		let onlyBrackets = string.replace(/[a-zA-Z0-9+?:-]/g, '').replace(/ /g, '').split('')

		for (let i = 0; i < onlyBrackets.length; i++) {
			console.log(onlyBrackets[i] + ' ??? ' + onlyBrackets.slice().reverse()[i])

			if (onlyBrackets[i] !== onlyBrackets.slice().reverse()[i]) {
				return false
			}
		}

		return true
	}

	console.log('----------------------------------------------')
	console.log('true ? ', test('(x + y) - (4)'))
	console.log('true ? ', test('(((10 ) ()) ((?)(:)))'))
	console.log('true ? ', test('[{()}]'))
	console.log('false ? ', test('(50)('))
	console.log('false ? ', test('[{]}'))
}

export default isBalanced