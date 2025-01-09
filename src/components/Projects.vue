<template>
  <div id="projects" class="js-block-scroll">
    <h2>Projects</h2>

    <div class="wrap2">
      <div class="projects_list">
        <button
          v-for="project in projects"
          :key="project.name"
          :style="'background-image: url(' + project.mainImg + ');'"
          class="projects_list__link"
          @click="popupProjectShow(project.title, project.price, project.desc, project.href, project.images)"
        >
          <span class="projects_list__title">{{ project.name }}</span>
          <span class="projects_list__price">{{ project.price }}</span>
        </button>
      </div>
    </div>
  </div>

  <div class="popup js-popup">
    <div class="popup__bg" @click="popupHide()"></div>

    <div class="popup__content_wrap">
      <button class="btn btn__close" type="button" @click="popupHide()"></button>

      <div class="popup__content js-popup-content"></div>
    </div>
  </div>
</template>

<script>
import {popupHide, popupProjectShow, popupShow} from '../assets/js/popup'

export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          name: 'Tatyana Voilokova',
          desc: 'Welcome to Tatyana Voilkova Photography, where moments come to life in stunning images. She is passionate about freezing time, creating memories, and telling stories through the art of photography.',
          href: 'tatyanavoilokova.com',
          id: 1,
          mainImg: require('../assets/i/projects/tatyanavoilokova/0.jpg'),
          price: '1500 € | 3 weeks',
          title: 'Tatyana Voilokova',
          images: [
            {src: require('../assets/i/projects/tatyanavoilokova/1.jpg')},
            {src: require('../assets/i/projects/tatyanavoilokova/2.jpg')},
            {src: require('../assets/i/projects/tatyanavoilokova/3.jpg')},
            {src: require('../assets/i/projects/tatyanavoilokova/4.jpg')},
            {src: require('../assets/i/projects/tatyanavoilokova/5.jpg')},
            {src: require('../assets/i/projects/tatyanavoilokova/6.jpg')}
          ]
        },
        {
          name: 'Brokertop',
          desc: 'Rent or sale commercial and private objects of real estate.',
          href: 'brokertop.ru',
          id: 5,
          mainImg: require('../assets/i/projects/brokertop/0.jpg'),
          price: '5000 € | 3 months',
          title: 'Brokertop | Real estate agency',
          images: [
            {src: require('../assets/i/projects/brokertop/1.jpg')},
            {src: require('../assets/i/projects/brokertop/2.jpg')},
            {src: require('../assets/i/projects/brokertop/3.jpg')}
          ]
        },
        {
          name: 'Chocolana',
          desc: 'Website for the pastry shop «Chocolana» with the ability to create a personalized chocolate set. Food photography, design and programming.',
          href: 'chocolana.com',
          id: 4,
          mainImg: require('../assets/i/projects/chocolana/0.jpg'),
          price: '3500 € | 3 months',
          title: 'Chocolana online shop',
          images: [
            {src: require('../assets/i/projects/chocolana/1.jpg')},
            {src: require('../assets/i/projects/chocolana/2.jpg')},
            {src: require('../assets/i/projects/chocolana/3.jpg')},
            {src: require('../assets/i/projects/chocolana/4.jpg')},
            {src: require('../assets/i/projects/chocolana/5.jpg')},
            {src: require('../assets/i/projects/chocolana/6.jpg')},
            {src: require('../assets/i/projects/chocolana/7.jpg')}
          ]
        },
        {
          name: 'Villabansko',
          desc: 'Elegant design solution for a premium villa booking. Web-site presents facilities and gives an overview of the main features.',
          href: 'villabansko.com',
          id: 3,
          mainImg: require('../assets/i/projects/villabansko/0.jpg'),
          price: '2500 € | 1 month',
          title: 'Villa Pirin Golf',
          images: [
            {src: require('../assets/i/projects/villabansko/1.jpg')},
            {src: require('../assets/i/projects/villabansko/2.jpg')}
          ]
        },
        {
          name: 'Villathassos',
          desc: 'Premium villa on Thassos for sale.',
          href: 'villathassos.com',
          id: 2,
          mainImg: require('../assets/i/projects/villathassos/0.jpg'),
          price: '2500 € | 1 month',
          title: 'Villa at Thassos',
          images: [
            {src: require('../assets/i/projects/villathassos/1.jpg')},
            {src: require('../assets/i/projects/villathassos/2.jpg')},
            {src: require('../assets/i/projects/villathassos/3.jpg')},
            {src: require('../assets/i/projects/villathassos/4.jpg')}
          ]
        },
        {
          name: 'P3week',
          desc: 'International forum web site on the topic of cooperation between the state and private business (public-private enterprise). A redesign of the existing site was made in order to improve usability.',
          href: 'p3week.ru',
          id: 1,
          mainImg: require('../assets/i/projects/p3week/0.jpg'),
          price: '7800 € | 4 months',
          title: 'P3week forum',
          images: [
            {src: require('../assets/i/projects/p3week/1.jpg')},
            {src: require('../assets/i/projects/p3week/2.jpg')},
            {src: require('../assets/i/projects/p3week/3.jpg')},
            {src: require('../assets/i/projects/p3week/4.jpg')},
            {src: require('../assets/i/projects/p3week/5.jpg')},
            {src: require('../assets/i/projects/p3week/6.jpg')},
            {src: require('../assets/i/projects/p3week/7.jpg')}
          ]
        }
      ]
    }
  },
  methods: {
    popupHide,
    popupProjectShow,
    popupShow
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/vars' as *;

.project {
  color: #000;
  position: relative;

  &__content {
    min-height: 600px;
    padding: 100px 0 30px;
    position: relative;

    &::after,
    &::before {
      content: "";
      left: 0;
      position: absolute;
      width: 100%;
      z-index: -1;
    }

    &::after {
      bottom: 0;
      height: 45%;
    }

    &::before {
      height: 55%;
      top: 0;
    }
  }

  &__desc {
    font-size: 20px;
    line-height: 1.7;
    padding: 30px 0 0;

    @media #{$tablet} {
      font-size: 16px;
    }
  }

  &__img {
    display: block;
    width: 100%;
  }

  &__link {
    color: $c_main;

    &:hover {
      color: $c_link_hover;
    }
  }

  &__price {
    color: $c_shadow;
  }

  &__title {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media #{$tablet} {
      h3 {
        padding: 0 0 .3em;
        width: 100%;
      }
    }
  }
}

.project_images {
  &__item {
    display: block;
    margin: 30px auto;
  }
}

.project_more {
  align-items: center;
  display: none;
  flex-direction: column;
  min-height: calc(100vh - 70px);
  position: relative;

  &::after {
    animation: loading 2s linear infinite;
    background: url(#{$icons}/loading.svg) no-repeat center scroll transparent;
    background-size: contain;
    content: "";
    display: block;
    height: 40px;
    left: 50%;
    margin: -20px 0 0 -20px;
    position: absolute;
    top: 50%;
    width: 40px;
    z-index: -1;
  }

  &.active {
    display: flex;
  }

  .owl-carousel {
    min-height: calc(100vh - 70px);

    button {
      &.owl-dot {
        border: 2px solid #000;
        border-radius: 50%;
        height: 16px;
        margin: 0 8px;
        position: relative;
        width: 16px;

        span {
          border: 1px solid #fff;
          border-radius: 50%;
          display: block;
          height: 18px;
          left: -3px;
          position: absolute;
          top: -3px;
          width: 18px;
        }

        &.active {
          background-color: #000;
        }
      }
    }
  }

  .owl-dots {
    bottom: 30px;
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 3;
  }

  .owl-item {
    background-color: #fff;
    min-height: calc(100vh - 70px);
  }

  .owl-nav {
    position: absolute;
  }

  .owl-stage {
    min-height: calc(100vh - 70px);
  }

  .owl-stage-outer {
    min-height: calc(100vh - 70px);
  }

  @media #{$tablet} {
    min-height: 340px;

    .owl-carousel,
    .owl-item,
    .owl-stage,
    .owl-stage-outer {
      min-height: 340px;
    }
  }
}

.project_more_item {
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}

.projects_list {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  position: relative;

  &__link {
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    overflow: hidden;
    position: relative;

    &::after {
      content: "";
      display: block;
      padding: 50% 0 0;
      position: relative;
    }

    &::before {
      background-color: #000;
      content: "";
      height: 100%;
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      transition: $transition;
      width: 100%;
      z-index: 3;
    }

    &:hover {
      &::before {
        opacity: .8;
      }

      .projects_list {
        &__title {
          letter-spacing: .05em;
          opacity: 1;
        }
      }
    }
  }

  &__price {
    background-color: $c_main;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    color: #fff;
    font-size: 1.1rem;
    padding: .5em 1em;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 3;
  }

  &__title {
    color: #fff;
    display: block;
    font-size: 1.5rem;
    font-weight: 800;
    left: 50%;
    letter-spacing: 10em;
    opacity: 0;
    position: absolute;
    text-transform: uppercase;
    top: 50%;
    transform: translate(-50%,-50%);
    transition: $transition;
    white-space: nowrap;
    z-index: 5;
  }

  @media #{$mobile} {
    grid-template-columns: 1fr;
  }
}
</style>