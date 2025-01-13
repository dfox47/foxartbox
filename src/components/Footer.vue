<template>
  <div class="footer">
    <div class="wrap">
      <span class="gotop" @click.prevent="scrollTo('top')"></span>

      <img :src="require('../assets/i/qr_code.svg')" class="qr_code" alt="">

      <ul class="social_links">
        <li v-for="(footerLink) in footerLinks" :key="footerLink.href" class="social_links__item">
          <a :href="footerLink.href" :title="footerLink.title" class="social_links__link" target="_blank">
            <img src="footerLink.icon" class="social_links__img" :alt="footerLink.title">
          </a>
        </li>
      </ul>

      <p class="footer__phone"><a :href="'tel:' + phone.replace(/[()-]/g, '').replaceAll(' ', '')">{{ phone }}</a></p>

      <p class="footer_slogan">stay true</p>

      <p class="footer_copyright">© 2010 - {{ new Date().getFullYear() }}</p>

      <p class="footer_logo">
        <span class="footer_logo__link" @click.prevent="scrollTo('top')">
          <img :src="require('../assets/i/icons/logo_5s.svg')" class="footer_logo__img" alt="">
        </span>
      </p>
    </div>
  </div>
</template>

<script setup>
import scrollTo from '../assets/js/scrollTo'
import {phone} from '../assets/js/config'

const footerLinks = [
  { href: '//web.facebook.com/foxartbox/', icon: require('../assets/i/icons/fb.svg'), title: 'Facebook' },
  { href: '//www.instagram.com/denis_fox_web/', icon: require('../assets/i/icons/inst.svg'), title: 'Instagram' }
]
</script>

<style lang="scss" scoped>
@use '../assets/styles/vars' as *;

.footer {
  animation: bgGradient 10s ease infinite;
  background: linear-gradient(-45deg, $c_gradient_home_start, darken($c_theme_cyperpunk, 30%), $c_theme_cyperpunk, lighten($c_gradient_home_start, 30%));
  background-size: 400% 400%;
  color: #fff;
  padding: 100px 0;
  position: relative;
  text-align: center;

  a {
    color: #fff;
    display: inline-block;
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  &__desc {
    text-transform: uppercase;
  }
}

.footer_copyright {
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 12px;
  opacity: 0.7;
}

.footer_logo {
  display: flex;
  justify-content: center;

  &__link {
    cursor: pointer;

    &:hover {
      .footer_logo__img {
        filter: invert(0);
      }
    }
  }

  &__img {
    filter: invert(100%);
    height: 30px;
    transition: $transition;
    width: 150px;
  }
}

.footer_slogan {
  font-size: 10px;
  text-transform: uppercase;
}
</style>