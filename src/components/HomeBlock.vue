<template>
	<div class="home_block js-home-block">
		<canvas id="projector" class="home_block__bg" width="1266" height="941"></canvas>

		<div class="home_block__content js-home-block-content">
			<img class="logo" src="../assets/i/icons/logo_2.svg" alt="" />
			<div class="home_block__desc js-home-block-desc">Foxartbox</div>
			<div class="home_block__slogan js-random-slogan"></div>
			<a class="btn btn__link js-scroll-to" @click="scroll('projects')">Projects</a>
		</div>
	</div>
</template>

<script>
export default {
	mounted () {
		document.querySelectorAll('.js-random-slogan').forEach((e) => {
			const delay = 3000

			const randomSlogan = () => {
				const slogans = [
					"Fast websites",
					"More than you expect",
					"We keep it simple",
					"Let's make it fast"
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
		scroll(id) {
			document.getElementById(id).scrollIntoView({
				behavior: 'smooth'
			})
		}
	}
}
</script>
