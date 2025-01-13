<template>
  <div id="contacts" class="contacts js-block-scroll">
    <h2>Contacts</h2>

    <p class="text-center">
      Contact with me and you will get fast, multilingual website with clean code.
    </p>

    <div class="contacts__content">
      <ul class="contacts_links">
        <li class="contacts_links__item" v-for="(contactsLink) in contactsLinks" :key="contactsLink.href">
          <a class="contacts_links__link" :href="contactsLink.href" target="_blank">
            <img class="contacts_links__img" :src="contactsLink.icon" :alt="contactsLink.title">
            <span>{{ contactsLink.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {email, phone} from '../assets/js/config'

const contactsLinks = [
  {href: 'mailto:' + email, icon: require('../assets/i/icons/email.svg'), title: email},
  {href: '//t.me/dfoxweb', icon: require('../assets/i/icons/telegram.svg'), title: '@dfoxweb'},
  {href: 'tel:' + phone.replace(/[()-]/g, '').replaceAll(' ', ''), icon: '', title: phone}
]
</script>

<style lang="scss" scoped>
@use '../assets/styles/vars' as *;

.contacts {
  color: $c_text;
  margin: 0 auto;
  max-width: 980px;
  padding: 5rem 30px 3rem;
  position: relative;
  transition: $transition;
  width: 100%;
  z-index: 3;

  &__content {
    margin: 0 auto;
    max-width: 300px;
    padding: 0 0 30px;
    width: 100%;
  }

  &__wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 73px 23px 0;
  }
}

.contacts_links {
  font-size: 20px;
  margin: 30px 0;

  &__img {
    display: block;
    left: 0;
    position: absolute;
    top: 0;
    max-width: 24px;
    width: 100%;
  }

  &__item {
    display: block;
    margin: 0 0 11px;
    position: relative;

    &:last-child {
      margin: 0;
    }
  }

  &__link {
    align-items: center;
    color: #000;
    display: flex;
    min-height: 23px;
    padding: 0 0 0 40px;
    position: relative;
    text-decoration: none;
    width: 100%;

    &:hover {
      text-decoration: none;
    }
  }
}
</style>