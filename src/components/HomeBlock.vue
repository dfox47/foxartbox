<template>
	<div class="home_block js-home-block">
		<canvas id="projector" class="home_block__bg" width="1266" height="941"></canvas>

		<div class="home_block__content js-home-block-content">
			<img class="logo" src="../assets/i/icons/logo_2.svg" alt="" />

			<div class="home_block_desc js-home-block-desc">foxartbox</div>
			<div class="home_block_slogan js-random-slogan">fast websites</div>
			<a class="btn btn__link js-scroll-to" @click="scroll('projects')">Projects</a>
		</div>
	</div>
</template>

<script>
export default {
	// methods: {
	// 	scroll(id) {
	// 		document.getElementById(id).scrollIntoView({
	// 			behavior: 'smooth'
	// 		});
	// 	}
	// }
}
</script>
