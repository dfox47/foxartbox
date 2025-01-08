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
            <span class="contacts_links__img js-img-scroll" :data-src="contactsLink.icon"></span>
            <span>{{ contactsLink.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import imgScroll from '../assets/js/imgScroll'
import {email, phone} from '../assets/js/config'
import {onMounted} from 'vue'

onMounted(() => {
  imgScroll()
})

const contactsLinks = [
  {href: 'mailto:' + email, icon: require('../assets/i/icons/email.svg'), title: email},
  {href: '//t.me/dfoxweb', icon: require('../assets/i/icons/telegram.svg'), title: '@dfoxweb'},
  {href: 'tel:' + phone.replace(/[()-]/g, '').replaceAll(' ', ''), icon: '', title: phone}
]
</script>