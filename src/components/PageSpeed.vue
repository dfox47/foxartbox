<template>
	<div id="pagespeed" class="carousel_wrap js-block-scroll">
		<h2>PageSpeed</h2>

		<carousel :autoplay="2500" :i18n="{
			'iconArrowRight': 'Next',
			'iconArrowLeft': 'Prev',
			}" :transition="500" :wrap-around="true">
			<slide v-for="slide in pageSpeedSlides" :key="slide">
				<span :data-src="slide.img" :title="slide.title" class="pagespeed_slide js-img-bg"></span>
			</slide>

			<template #addons>
				<pagination />
				<navigation>
					<template #next></template>
					<template #prev></template>
				</navigation>
			</template>
		</carousel>
	</div>
</template>

<script>
// examples https://ismail9k.github.io/vue3-carousel/examples.html
import {Carousel, Navigation, Pagination, Slide} from 'vue3-carousel'

export default {
	name: 'Page Speed',
	components: {
		Carousel,
		Navigation,
		Pagination,
		Slide
	},
	data() {
		return {
			pageSpeedSlides: [
				{href: '/',                 img: require('../assets/i/pagespeed/1.png'),   title: 'Foxartbox'},
				{href: '//algatech.net/',   img: require('../assets/i/pagespeed/3.png'),   title: 'Algatech'},
				{href: '',                  img: require('../assets/i/pagespeed/4.png'),   title: 'Foxartbox'},
				{href: '//brokertop.ru/',   img: require('../assets/i/pagespeed/2.png'),   title: 'Brokertop'},
			]
		}
	}
}
</script>