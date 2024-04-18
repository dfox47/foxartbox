<template>
	<div class="content">
		<HomeBlock />
		<About />
		<Projects />
		<PageSpeed />
		<Contacts />
		<Clock />
	</div>
</template>

<script>
import About        from '@/components/About'
import Clock        from '@/components/Clock'
import Contacts     from '@/components/Contacts'
import HomeBlock    from '@/components/HomeBlock'
import PageSpeed    from '@/components/PageSpeed'
import Projects     from '@/components/Projects'

export default {
	name: 'Home',
	components: {
		About,
		Clock,
		Contacts,
		HomeBlock,
		PageSpeed,
		Projects
	},
	created() {
		document.title = "Home | Foxartbox"
	}
}
</script>