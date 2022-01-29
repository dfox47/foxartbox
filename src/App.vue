
<template>
	<Header />
	<HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'

export default {
	name: 'App',
	components: {
		Header,
		HelloWorld
	}
}
</script>

<style lang="scss">
@import 'assets/styles/_styles.scss';
</style>
