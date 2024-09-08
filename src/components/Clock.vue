<template>
	<div class="clock_list">
		<div class="clock js-clock" v-for="city in clockLocations" :key="city.name" :data-gmt="city.gmt">
			<div class="clock__title">
        {{ city.name }} <span class="clock__temp">{{ city.temp }} °C</span>
      </div>

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

      <div>

      </div>
		</div>
	</div>
</template>

<script setup>
import {onBeforeUnmount, onMounted, ref} from 'vue'
import getDate from '../assets/js/getDate'
import {API_KEY, BASE_URL} from '../constants'

const clockLocations = ref([
  {name: 'New York', gmt: '-5', cityShort: 'Moscow'},
  {name: 'Sofia', gmt: '+3', cityShort: 'Sofia'},
  {name: 'Tokyo', gmt: '+9', cityShort: 'Tokyo'}
])

onBeforeUnmount(() => {
  clearInterval(getDate)
})

onMounted(() => {
  setInterval(getDate, 1000)
  updateWeather()
})

// Update weather data for each location
const updateWeather = async () => {
  const updatedTemps = await Promise.all(
    clockLocations.value.map(location => getWeather(location.cityShort))
  )

  clockLocations.value = clockLocations.value.map((location, index) => ({
    ...location,
    temp: updatedTemps[index]
  }))
}

// more info https://openweathermap.org/current
const getWeather = async (city) => {
  try {
    const response = await fetch(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`)
    const data = await response.json()
    return data?.main?.temp.toFixed(0)
  } catch (error) {
    console.error('Error fetching weather:', error)
    return 'N/A'
  }
}
</script>