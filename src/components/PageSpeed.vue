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
        {href: '/',                     img: require('../assets/i/pagespeed/1.png'),   title: 'Foxartbox'},
        {href: '//villathassos.com/',   img: require('../assets/i/pagespeed/6.png'),   title: 'Villa Thassos'},
        {href: '//algatech.net/',       img: require('../assets/i/pagespeed/3.png'),   title: 'Algatech'},
        {href: '',                      img: require('../assets/i/pagespeed/4.png'),   title: 'Foxartbox'},
        // {href: '//brokertop.ru/',       img: require('../assets/i/pagespeed/2.png'),   title: 'Brokertop'},
      ]
    }
  }
}
</script>

<style lang="scss">
@use '../assets/styles/vars' as *;

.carousel {
  margin: 0 auto;
  max-width: 800px;

  &__liveregion {
    display: none;
  }

  &__next,
  &__prev {
    background-color: #000;
    border-radius: 50%;
    height: 70px;
    margin: 0;
    opacity: .3;
    transition: $transition;
    width: 70px;

    &:hover {
      opacity: 1;
    }

    &::after,
    &::before {
      background-color: #fff;
      border-radius: 4px;
      content: "";
      height: 4px;
      left: 23px;
      position: absolute;
      width: 30px;
    }

    &::after {
      top: 23px;
      transform: rotate(45deg);
    }

    &::before {
      top: 43px;
      transform: rotate(-45deg);
    }
  }

  &__next {
    background-color: #000;
  }

  &__prev {
    background-color: #000;

    &::after,
    &::before {
      left: 17px;
    }

    &::after {
      transform: rotate(-45deg);
    }

    &::before {
      transform: rotate(45deg);
    }
  }

  &__pagination {
    margin: 3rem 0 0;
  }

  &__pagination-button {
    border: 1px solid rgba(#000, .9);
    border-radius: 50%;
    height: 2rem;
    margin: 0 .5rem;
    transition: $transition;
    width: 2rem;

    &::after {
      display: none;
    }

    &--active {
      background-color: #000;
    }
  }
}

.carousel_wrap {
  padding: 7rem 0 0;
}

.pagespeed_slide {
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  width: 100%;

  &::after {
    content: "";
    display: block;
    padding: 60% 0 0;
    position: relative;
  }
}

</style>