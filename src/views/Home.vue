<template>
	<HomeBlock />
	<Projects />
	<Process />
	<Contacts />
</template>

<script>
import Contacts from '@/components/Contacts'
// import Crew from '@/components/Crew'
import HomeBlock from '@/components/HomeBlock'
import Process from '@/components/Process'
import Projects from '@/components/Projects'

export default {
	components: {
		Contacts,
		HomeBlock,
		Process,
		Projects,
	},
	created() {
		// document.title = "About Us"
	}
}
</script>
