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
  {name: 'New York', gmt: '-5', cityShort: 'New York'},
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

<style lang="scss" scoped>
@use '../assets/styles/vars' as *;

.clock {
  margin: 30px;

  &--dark {
    .clock_analog {
      background-color: #000;
      color: #fff;

      &::after {
        background-color: #fff;
      }
    }

    .clock_arrow {
      &__hours {
        background-color: #fff;
      }

      &__minutes {
        background-color: #fff;
      }
    }
  }

  &__temp {
    font-size: .5em;
    margin: 0 0 0 1em;
    opacity: 0.7;
    position: absolute;
    white-space: nowrap;
  }

  &__title {
    font-size: 22px;
    font-weight: 700;
    margin: 0 0 1em;
    text-align: center;
    position: relative;
  }
}

.clock_analog {
  border: 1px solid #000;
  border-radius: 50%;
  height: 200px;
  position: relative;
  width: 200px;
  z-index: 1;

  &::after {
    background-color: #000;
    border-radius: 50%;
    content: "";
    height: 8px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 8px;
    z-index: 5;
  }
}

.clock_arrow {
  background-color: #000;
  border-radius: 10px;
  position: absolute;
  transform-origin: bottom;
  width: 3px;

  &__hours {
    left: 48%;
    top: 25%;
    height: 25%;
    width: 8px;
    z-index: 1;
  }

  &__minutes {
    height: 35%;
    left: 48.5%;
    top: 16%;
    z-index: 2;
  }

  &__seconds {
    background-color: $c_main;
    height: 40%;
    left: 48.5%;
    top: 10%;
    z-index: 3;
  }
}

.clock_digital {
  font-size: 16px;
  font-weight: 700;
  margin: 1em 0 0;
  text-align: center;
}

.clock_list {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 0 100px;
}

.clock_number {
  font-size: 16px;
  font-weight: 700;
  padding: 4px;
  position: absolute;
  z-index: 3;

  &__3 {
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  &__6 {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &__9 {
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  &__12 {
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
}

.clock_time {
  align-items: center;
  display: flex;
  font-size: 24px;
  font-weight: 700;
  justify-content: center;
  padding: 20px 0;
}
</style>