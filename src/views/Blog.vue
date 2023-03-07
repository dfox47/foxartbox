<template>
	<div class="content_inner">
		<div class="wrap">
			<h1>Blog</h1>

			<p>Here will be BLOG with JS</p>
		</div>
	</div>
</template>

<script>
// import About        from '@/components/About'

export default {
	components: {
		// About,
		// Contacts,
		// HomeBlock,
		// Process,
		// Projects
	},
	created() {
		document.title = "Blog | Foxartbox"
	},
	methods: {
		listDir() {
			const illustrations = require.context(
				'@/assets/i/icons',
				true,
				/^.*\.svg$/
			)

			console.log(illustrations.keys())
		}
	},
	mounted() {
		// highlight menu item on inner pages
		// this.listDir()
	}
}
</script>