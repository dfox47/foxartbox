<template>
  <ul class="theme_change">
    <li v-for="themeItem in themeItems" :key="themeItem.name" class="theme_change__item">
      <span :class="'theme_change__link--type-' + themeItem.class" :title="themeItem.title" class="theme_change__link" @click.prevent="themeChange(themeItem.name)"></span>
    </li>
  </ul>
</template>

<script setup>
import themeChange from '../assets/js/themeChange'
import themeFromLocalStorage from '../assets/js/themeFromLocalStorage'

themeFromLocalStorage()

const themeItems = [
  {name: 'theme_standart',        title: 'Default theme',         class: '1'},
  {name: 'theme_black_and_white', title: 'Black & white theme',   class: '2'},
  {name: 'theme_cyperpunk',       title: 'Cyberpunk theme',       class: '3'},
  {name: 'theme_forest',          title: 'Forest theme',          class: '4'},
  {name: 'theme_yellow',          title: 'Yellow theme',          class: '5'}
]
</script>

<style lang="scss" scoped>
@use '../assets/styles/vars' as *;

.theme_change {
  display: flex;
  font-size: 1rem;
  left: 0.5rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &__item {
    margin: 0 0.5rem 0 0;

    &:last-child {
      margin: 0;
    }
  }

  &__link {
    background-color: #000;
    border-radius: 50%;
    box-shadow: 0 0 3px #000;
    display: block;
    height: 24px;
    width: 24px;

    &:hover {
      opacity: 0.7;
    }

    &--type-1 {
      background: $c_theme_cyperpunk;
    }

    &--type-2 {
      background: linear-gradient(-45deg, #000, #fff);
    }

    &--type-3 {
      background: linear-gradient(-45deg, $c_gradient_home_start, $c_theme_cyperpunk);
    }

    &--type-4 {
      background: linear-gradient(-45deg, $c_gradient_home_start, $c_theme_forest);
    }

    &--type-5 {
      background: linear-gradient(-45deg, darken($c_theme_yellow, 50%), $c_theme_yellow, lighten($c_theme_yellow, 50%));
    }
  }

  @media #{$tablet} {
    left: 90px;
  }

  @media #{$mobile_s} {
    left: 50%;
    transform: translate(-50%,-50%);
  }
}

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

    @media #{$mobile} {
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
      opacity: .7;
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
  @media #{$mobile} {
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
        &::after {
          top: 18px;
          transform: rotate(-45deg);
        }

        &::before {
          top: 18px;
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
  opacity: .7;
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