<template>
	<div class="clock_list">
		<div class="clock js-clock" v-for="city in clockLocations" :key="city.name" :data-gmt="city.gmt">
			<div class="clock__title">{{ city.name }}</div>

			<div class="clock_analog">
				<div class="clock_number clock_number__3">3</div>
				<div class="clock_number clock_number__6">6</div>
				<div class="clock_number clock_number__9">9</div>
				<div class="clock_number clock_number__12">12</div>

				<div class="clock_arrow clock_arrow__seconds js-clock-seconds"></div>
				<div class="clock_arrow clock_arrow__minutes js-clock-minutes"></div>
				<div class="clock_arrow clock_arrow__hours js-clock-hours"></div>
			</div>

			<div class="clock_digital js-clock-digital"></div>
		</div>
	</div>
</template>

<script>
import getDate from '../assets/js/getDate'

export default {
	name: 'Clock',
	beforeUnmount() {
		clearInterval(this.getDate)
	},
	created() {
		setInterval(this.getDate, 1000)
	},
	data() {
		return {
			clockLocations: [
				{name: 'New York',  gmt: '-5'},
				{name: 'Sofia',     gmt: '+2'},
				{name: 'Tokyo',     gmt: '+9'}
			]
		}
	},
	methods: {
		getDate
	}
}
</script>