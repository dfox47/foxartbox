const sleep = () => {
	/**
	 * @param {number} millis
	 */
	async function sleep(millis) {
		return new Promise(function(resolve) {
			setTimeout(resolve, millis)
		})
	}

	// testing part
	let t = Date.now()
	sleep(100).then(() => console.log(Date.now() - t)) // 100
}

export default sleep