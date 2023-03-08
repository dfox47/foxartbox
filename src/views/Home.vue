<template>
	<div class="content">
		<HomeBlock />
		<About />
		<Projects />
		<Contacts />
		<Clock />
	</div>
</template>

<script>
import About        from '@/components/About'
import Contacts     from '@/components/Contacts'
import HomeBlock    from '@/components/HomeBlock'
import Projects     from '@/components/Projects'
import Clock        from '@/components/Clock'

export default {
	name: 'Home',
	components: {
		About,
		Clock,
		Contacts,
		HomeBlock,
		Projects
	},
	created() {
		document.title = "Home | Foxartbox"
	}
}
</script>