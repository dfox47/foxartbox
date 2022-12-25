<template>
	<Header />

	<router-view />

	<Footer />
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default {
	name: 'App',
	components: {
		Footer,
		Header
	},
	methods: {
		scroll(id) {
			document.getElementById(id).scrollIntoView({
				behavior: 'smooth'
			})
		}
	}
}
</script>

<style lang="scss">
@import 'assets/styles/_styles.scss';
</style>