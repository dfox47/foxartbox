<template>
	<div>
		<div class="equalality_test">
			<input class="equalality_test__input js-equality-input" type="text">

			<div class="equalality_test__result js-equality-result">---***---</div>
		</div>

		<div class="home_block js-home-block">
			<canvas id="projector" class="home_block__bg" width="1266" height="941"></canvas>

			<div class="home_block__content js-home-block-content">
				<span class="logo js-img-scroll" :data-src="require('../assets/i/icons/logo_4.svg')"></span>
				<div class="home_block__desc js-home-block-desc">Foxartbox</div>
				<div class="home_block__slogan js-random-slogan"></div>
				<a class="btn btn__link js-scroll-to" @click.prevent="scrollTo('about')">About me</a>
			</div>
		</div>
	</div>
</template>

<script>
import imgScroll from '../assets/js/imgScroll'
import randomSlogan from '../assets/js/randomSlogan'
import scrollTo from '../assets/js/scrollTo'

export default {
	name: 'HomeBlock',
	mounted () {
		imgScroll()
		randomSlogan()
	},
	methods: {
		scrollTo
	}
}
</script>