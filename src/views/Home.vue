<template>
	<div class="content">
		<HomeBlock />
		<About />
		<Projects />
		<Process />
		<Contacts />
	</div>
</template>

<script>
import About        from '@/components/About'
import Contacts     from '@/components/Contacts'
import HomeBlock    from '@/components/HomeBlock'
import Process      from '@/components/Process'
import Projects     from '@/components/Projects'

export default {
	components: {
		About,
		Contacts,
		HomeBlock,
		Process,
		Projects
	},
	created() {
		// document.title = "About Us"
	}
}
</script>