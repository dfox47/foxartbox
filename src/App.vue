
<template>
	<Header />
	<HomeBlock />
	<Projects />
	<Process />
	<Crew />
	<Contacts />
</template>

<script>
import Contacts from "@/components/Contacts";
import Crew from "@/components/Crew";
import Header from './components/Header.vue';
import HomeBlock from './components/HomeBlock.vue';
import Process from "@/components/Process";
import Projects from './components/Projects.vue';

export default {
	name: 'App',
	components: {
		Contacts,
		Crew,
		Header,
		HomeBlock,
		Process,
		Projects
	}
}
</script>

<style lang="scss">
@import 'assets/styles/_styles.scss';
</style>
