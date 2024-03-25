<template>
	<div>
		<div class="home_block js-home-block">
			<canvas id="projector" class="home_block__bg" height="941" width="1266"></canvas>

			<div class="home_block__content js-home-block-content">
				<span :data-src="require('../assets/i/icons/logo_4.svg')" class="paw js-svg-inline"></span>
				<div class="home_block__desc js-home-block-desc">Foxartbox</div>
				<div class="home_block__slogan js-random-slogan"></div>
				<button class="btn btn__link js-scroll-to" @click.prevent="scrollTo('about')">About me</button>
			</div>
		</div>
	</div>
</template>

<script>
import imgScroll from '../assets/js/imgScroll'
import randomSlogan from '../assets/js/randomSlogan'
import scrollTo from '../assets/js/scrollTo'
import svgInline from '../assets/js/svgInline'

export default {
	name: 'HomeBlock',
	mounted () {
		imgScroll()
		randomSlogan()
		svgInline()
	},
	methods: {
		scrollTo
	}
}
</script>