<template>
	<HomeBlock />
	<Projects />
	<Process />
	<Crew />
	<Contacts />
</template>

<script>
import Contacts from '@/components/Contacts'
import Crew from '@/components/Crew'
import HomeBlock from '@/components/HomeBlock'
import Process from '@/components/Process'
import Projects from '@/components/Projects'

export default {
	components: {
		Contacts,
		Crew,
		HomeBlock,
		Process,
		Projects,
	},
	created() {
		// document.title = "About Us"
	}
}
</script>
