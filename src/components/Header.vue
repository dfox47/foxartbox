<template>
  <div class="header">
    <div id="top" class="js-block-scroll"></div>

    <div class="topmenu js-topmenu">
      <ThemeChange />

      <div class="wrap">
        <ul class="topmenu_list">
          <li v-for="menuItem in menuItems" :key="menuItem.title" class="topmenu_list__item">
            <a :class="{active: (menuItem.href | replace('/#', '') === activeId)}"
              :href="menuItem.href"
              class="topmenu_list__link js-topmenu-link"
              @click.prevent="scrollTo(menuItem.href); mobileMenuToggle()">{{ menuItem.title }}
            </a>
          </li>
        </ul>

        <div class="topmenu_mobile">
          <span class="topmenu_mobile__logo" @click.prevent="scrollTo('top'); mobileMenuToggle()"><img :src="require('../assets/i/icons/logo_4.svg')" alt=""></span>

          <div class="topmenu_mobile__toggle" @click="mobileMenuToggle"><span></span></div>
        </div>
      </div>

      <a :href="'tel:' + phone.replace(/[()-]/g, '').replaceAll(' ', '')" class="topmenu_phone">{{ phone }}</a>
    </div>

    <div class="topmenu_fade" @click="mobileMenuToggle"></div>
  </div>
</template>

<script>
import ThemeChange from './ThemeChange'

import imgScroll from '../assets/js/imgScroll'
import imgBg from '../assets/js/imgBg'
import mobileMenuToggle from '../assets/js/mobileMenuToggle'
import scrollTo from '../assets/js/scrollTo'

import 'vue3-carousel/dist/carousel.css'
// import { meta } from 'vue-meta';
import {phone} from '../assets/js/config'

// for interview
// import toBeOrNotToBe from '../assets/js/interview/toBeOrNotToBe'

export default {
  name: 'Header',
  components: {
    ThemeChange
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)

    // check if there is theme at localStorage
    // this.themeFromLocalStorage()
  },
  data() {
    return {
      activeId : '',
      menuItems: [
        {title: 'Home',         href: '/#top'},
        {title: 'About me',     href: '/#about'},
        {title: 'Projects',     href: '/#projects'},
        {title: 'Pagespeed',     href: '/#pagespeed'},
        // {title: 'Process',      href: '/#process'},
        {title: 'Contacts',     href: '/#contacts'},
        // {title: 'Blog',         href: '/blog'}
      ],
      phone
    }
  },
  methods: {
    mobileMenuToggle,
    scrollTo,

    // on scroll
    handleScroll() {
      // allow only on home page
      if (window.location.pathname !== '/') return

      let blockId = 'top'
      let itemsProcessed = 0

      document.querySelectorAll('.js-block-scroll').forEach((e, index, array) => {
        itemsProcessed++

        // change block ID if it's in viewport
        if (window.scrollY > e.offsetTop - 100) {
          blockId         = e.getAttribute('id')
          this.activeId   = blockId
        }

        // get to end of array | change url | change active menu item
        if (itemsProcessed === array.length) {
          // change url to current menu item
          history.pushState(null, null, '/#' + blockId)

          // remove active class from all menu items
          document.querySelectorAll('.js-topmenu-link').forEach((link) => {
            link.classList.remove('active')
          })

          // add active class to scrolled block
          document.querySelector('.js-topmenu').querySelector('[href="/#' + blockId + '"]').classList.add('active')

          // change title
          document.title = blockId.charAt(0).toUpperCase() + blockId.slice(1) + ' | Foxartbox'
        }
      })
    },

    replace(e, rep, repWith) {
      return e.split(rep).join(repWith)
    },

    topmenuItemHighlight() {
      const $topmenuItem = document.querySelector('.js-topmenu-link[href="' + window.location.pathname + '"]')

      if (!$topmenuItem) return

      $topmenuItem.classList.add('active')
    }
  },
  mounted() {
    imgScroll()
    imgBg()

    // highlight menu item on inner pages
    this.topmenuItemHighlight()

    // *** interview JS [START]
    // toBeOrNotToBe()
    // *** interview JS [END]
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  metaInfo: {
    // Set the meta description for this component
    meta: [
      {
        name: 'description',
        content: 'Web-sites development. Fast & simple. By Denis FOX',
      },
    ],
  },
}
</script>

<style lang="scss">
@use '../assets/styles/vars' as *;

.topmenu {
  background-color: #fff;
  box-shadow: 0 0 7px #000;
  font-size: 16px;
  left: 0;
  position: fixed;
  text-transform: uppercase;
  top: 0;
  transition: $transition;
  width: 100%;
  z-index: 9;

  &__bg {
    background-color: rgba($c_gradient_home_start, .8);
    display: none;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    transition: $transition;
    width: 100%;
    z-index: 8;
  }
}

.topmenu_active {
  .topmenu {
    background-color: #fff;
  }

  .topmenu_list {
    a,
    a:visited {
      color: #000;

      &.active {
        color: #fff;
      }
    }
  }

  .topmenu_mobile__toggle,
  .topmenu_mobile__toggle:visited {
    > span {
      background-color: #000;
    }
  }

  .topmenu_mobile__logo,
  .topmenu_mobile__logo:visited {
    color: #000;

    img {
      filter: invert(100%);
    }
  }
}

.topmenu_fade {
  background-color: #000;
  display: none;
  height: 100%;
  left: 0;
  opacity: .7;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 7;
}

.topmenu_list {
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;

  &__link {
    color: #000;
    display: block;
    opacity: .7;
    outline: 0 none;
    padding: 10px 20px;
    position: relative;
    text-decoration: none;

    &:hover,
    &.active {
      color: #fff;
      opacity: 1;
      text-decoration: none;

      &::after {
        top: 0;
      }
    }

    &::after {
      background-color: #000;
      content: "";
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: -150px;
      transition: $transition;
      width: 100%;
      z-index: -1;
    }

    &--logo {
      opacity: 1;

      img {
        filter: invert(0);
        width: 30px;
        height: 30px;
      }
    }

    @media #{$tablet} {
      padding: 20px 30px;
      text-align: center;

      &::after {
        display: none;
      }

      &:hover,
      &.active {
        background-color: #000;
        color: #fff;
      }
    }
  }

  &__item {
    display: block;
  }

  @media #{$tablet} {
    background-color: #fff;
    box-shadow: 0 4px 7px #000;
    display: none;
    left: 0;
    position: absolute;
    top: 100%;
    width: 100%;
  }
}

.topmenu_mobile {
  align-items: center;
  display: none;
  justify-content: space-between;

  &__logo {
    align-items: center;
    color: #000;
    cursor: pointer;
    display: flex;
    padding: 4px 0;
    text-decoration: none;
    transition: $transition;

    img {
      display: block;
      height: 40px;
      filter: invert(100%);
      margin: 0 10px 0 0;
      width: 40px;

      @media #{$tablet} {
        filter: invert(0);
      }
    }

    &:hover {
      opacity: 0.7;
    }
  }

  &__toggle {
    display: block;
    cursor: pointer;
    height: 40px;
    position: relative;
    text-decoration: none;
    width: 40px;

    &::after,
    &::before,
    > span {
      background-color: #000;
      content: "";
      display: block;
      height: 2px;
      left: 8px;
      margin: 0 0 4px;
      position: absolute;
      top: 19px;
      transition: $transition;
      width: 22px;
    }

    &::after {
      top: 13px;
    }

    &::before {
      top: 25px;
    }
  }

  @media #{$tablet} {
    display: flex;
  }
}

.topmenu_mobile_active {
  @media #{$tablet} {
    .topmenu {
      &__bg {
        display: block;
      }
    }

    .topmenu_list {
      display: block;
    }

    .topmenu_fade {
      display: block;
    }

    .topmenu_mobile {
      &__toggle {
        &::after,
        &::before {
          top: 18px;
        }

        &::after {
          transform: rotate(-45deg);
        }

        &::before {
          transform: rotate(45deg);
        }

        > span {
          left: 100px;
          opacity: 0;
        }
      }
    }
  }
}

.topmenu_phone {
  color: #000;
  font-size: 14px;
  opacity: 0.7;
  position: absolute;
  right: 10px;
  text-decoration: none;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    opacity: 1;
  }

  @media #{$tablet} {
    right: 90px;
  }

  @media #{$mobile_s} {
    display: none;
  }
}
</style>