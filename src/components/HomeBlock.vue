<template>
  <div>
    <div class="home_block js-home-block">
      <canvas id="projector" class="home_block__bg" height="941" width="1266"></canvas>

      <div class="home_block__content js-home-block-content">
        <span :data-src="require('../assets/i/icons/logo_4.svg')" class="paw js-svg-inline"></span>
        <canvas class="home_block__desc js-home-block-desc"></canvas>
        <div class="home_block__slogan js-random-slogan"></div>
        <button class="btn btn__link js-scroll-to" type="button" @click.prevent="scrollTo('about')">About me</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import imgScroll from '../assets/js/imgScroll'
import logoCanvas from '../assets/js/logoCanvas'
import randomSlogan from '../assets/js/randomSlogan'
import scrollTo from '../assets/js/scrollTo'
import svgInline from '../assets/js/svgInline'
import {onMounted} from 'vue'

onMounted (() => {
  imgScroll()
  logoCanvas()
  randomSlogan()
  svgInline()
})

scrollTo()
</script>

<style lang="scss" scoped>
@use '../assets/styles/vars' as *;

.home {
  h1 {
    display: none;
  }
}

.home_block {
  align-items: center;
  animation: bgGradient 10s ease infinite;
  background: linear-gradient(-45deg, darken($c_theme_cyperpunk, 50%), $c_theme_cyperpunk, $c_gradient_home_start);
  background-size: 400% 400%;
  color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 100vh;
  padding: 100px 0;
  perspective: 1000px;
  position: relative;
  text-align: center;
  transition: $transition;

  &__bg {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }

  &__content {
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
    transform-style: preserve-3d;
    width: 100%;
    z-index: 3;
  }

  &__desc {
    animation: blur 5s infinite;
    font-size: 98px;
    font-weight: 700;
    height: 110px;
    letter-spacing: .05em;
    line-height: 1;
    margin: 0 0 .25em;
    max-width: 660px;
    position: relative;
    text-transform: uppercase;
    width: 100%;
    transition: $transition;

    @media #{$tablet} {
      height: 90px;
      max-width: 500px;
    }

    @media #{$mobile} {
      height: 60px;
      max-width: 320px;
    }
  }

  &__slogan {
    font-size: 29px;
    margin: 0 0 1.4em;
    min-height: 39px;
    opacity: 1;
    text-transform: uppercase;
    transition: all 1s ease-in-out;

    &.active {
      opacity: 0;
      transition: all 1s ease-in-out;
    }

    @media #{$tablet} {
      font-size: 24px;
    }

    @media #{$mobile} {
      font-size: 16px;
    }
  }

  @media #{$mobile} {
    min-height: 0;
  }
}
</style>