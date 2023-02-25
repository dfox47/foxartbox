<template>
	<div class="home_block js-home-block">
		<canvas id="projector" class="home_block__bg" width="1266" height="941"></canvas>

		<div class="home_block__content js-home-block-content">
			<img class="logo" src="../assets/i/icons/logo_4.svg" alt="" />
			<div class="home_block__desc js-home-block-desc">Foxartbox</div>
			<div class="home_block__slogan js-random-slogan"></div>
			<a class="btn btn__link js-scroll-to" @click.prevent="scrollTo('about')">About</a>
		</div>
	</div>
</template>

<script>
import scrollTo from '../assets/js/scrollTo'

export default {
	name: 'HomeBlock',
	mounted () {
		document.querySelectorAll('.js-random-slogan').forEach((e) => {
			const delay = 3000

			const randomSlogan = () => {
				const slogans = [
					"Fast websites",
					"Mobile friendly",
					"W3C standards",
					"Satisfied client. Always",
					"Websites support"
				]

				e.innerHTML = slogans[Math.floor(Math.random() * slogans.length)]

				e.classList.remove('active')

				setTimeout(() => {
					e.classList.add('active')
				}, delay - 1000)
			}

			randomSlogan()

			setInterval(function () {
				randomSlogan()
			}, delay)
		})
	},
	methods: {
		scrollTo
	}
}
</script>