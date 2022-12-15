<template>
	<div>
		<div class="wrap">
			<h2 class="js-block-scroll" id="process">Process</h2>

			<ol class="process">
				<li class="process__item" v-for="processItem in processItems" :key="processItem.title">
					<h3>{{ processItem.title }}</h3>

					<p class="process__desc">{{ processItem.desc }}</p>
				</li>
			</ol>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Process',
	data() {
		return {
			processItems: [
				{title: 'Connect',      desc: "The project begins with a discussion of your needs and ideas."},
				{title: 'Development',  desc: "Design, programming, SEO - that's our part of work"},
				{title: 'Support',      desc: "You can manage your project independently, but if you need help we will happy to provide a support."}
			],
		}
	},
}
</script>