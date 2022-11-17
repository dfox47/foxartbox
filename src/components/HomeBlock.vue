<template>
	<div class="home_block js-home-block" @scroll="onScroll">
		<canvas id="projector" class="home_block__bg" width="1266" height="941"></canvas>

		<div class="home_block__content js-home-block-content">
			<img class="logo" src="../assets/i/icons/logo_2.svg" alt="" />

			<div class="home_block__desc js-home-block-desc">Foxartbox</div>
			<div class="home_block__slogan js-random-slogan">Let's make it fast</div>
			<a class="btn btn__link js-scroll-to" @click="scroll('projects')">Projects</a>
		</div>
	</div>
</template>

<script>
export default {
	created () {
		window.addEventListener('scroll', this.handleScroll);
	},
	unmounted () {
		window.removeEventListener('scroll', this.handleScroll);
	},
	methods: {
		handleScroll () {
			// Any code to be executed when the window is scrolled
		}
	}
}
</script>
