<template>
	<div class="header">
		<div id="top" class="js-block-scroll"></div>

		<div class="topmenu js-topmenu">
			<ul class="theme_change">
				<li v-for="themeItem in themeItems" :key="themeItem.name" class="theme_change__item">
					<a :class="'theme_change__link--type-' + themeItem.class" :title="themeItem.title" class="theme_change__link" href="javascript:void(0);" @click.prevent="themeChange(themeItem.name)"></a>
				</li>
			</ul>

			<div class="wrap">
				<ul class="topmenu_list">
<!--					<li class="topmenu_list__item">-->
<!--						<a class="topmenu_list__link topmenu_list__link&#45;&#45;logo js-topmenu-link" href="#top"><span class="js-img-scroll" :data-src="require('../assets/i/icons/logo_4.svg')" title="home"></span></a>-->
<!--					</li>-->

					<li v-for="menuItem in menuItems" :key="menuItem.title" class="topmenu_list__item">
						<a :class="{active: (menuItem.href | replace('/#', '') === activeId)}"
                            :href="menuItem.href"
                            class="topmenu_list__link js-topmenu-link"
                            @click.prevent="scrollTo(menuItem.href); mobileMenuToggle()">{{ menuItem.title }}
						</a>
					</li>
				</ul>

				<div class="topmenu_mobile">
					<a class="topmenu_mobile__logo" @click.prevent="scrollTo('top'); mobileMenuToggle()"><span :data-src="require('../assets/i/icons/logo_4.svg')" class="js-img-scroll"></span></a>

					<div class="topmenu_mobile__toggle" @click="mobileMenuToggle"><span></span></div>
				</div>
			</div>

			<a :href="'tel:' + phone.replace(/[()-]/g, '').replaceAll(' ', '')" class="topmenu_phone">{{ phone }}</a>
		</div>

		<div class="topmenu_fade" @click="mobileMenuToggle"></div>
	</div>
</template>

<script>
import imgScroll from '../assets/js/imgScroll'
import mobileMenuToggle from '../assets/js/mobileMenuToggle'
import scrollTo from '../assets/js/scrollTo'
import themeChange from '../assets/js/themeChange'
import themeFromLocalStorage from '../assets/js/themeFromLocalStorage'

import 'vue3-carousel/dist/carousel.css'

import {phone} from '../assets/js/config'

// for interview
// import toBeOrNotToBe from '../assets/js/interview/toBeOrNotToBe'

export default {
	name: 'Header',
	created() {
		window.addEventListener('scroll', this.handleScroll)

		// check if there is theme at localStorage
		this.themeFromLocalStorage()
	},
	data() {
		return {
			activeId : '',
			menuItems: [
				{title: 'Home',         href: '/#top'},
				{title: 'About me',     href: '/#about'},
				{title: 'Projects',     href: '/#projects'},
				// {title: 'Process',      href: '/#process'},
				{title: 'Contacts',     href: '/#contacts'},
				// {title: 'Blog',         href: '/blog'}
			],
			phone,
			themeItems: [
				{name: 'theme_standart',        title: 'Default theme',         class: '1'},
				{name: 'theme_black_and_white', title: 'Black & white theme',   class: '2'},
				{name: 'theme_cyperpunk',       title: 'Cyberpunk theme',       class: '3'},
				{name: 'theme_forest',          title: 'Forest theme',          class: '4'},
				{name: 'theme_yellow',          title: 'Yellow theme',          class: '5'}
			]
		}
	},
	methods: {
		mobileMenuToggle,
		scrollTo,
		themeChange,
		themeFromLocalStorage,

		// on scroll
		handleScroll() {
			// allow only on home page
			if (window.location.pathname !== '/') return

			let blockId         = 'top'
			let itemsProcessed  = 0

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

		// highlight menu item on inner pages
		this.topmenuItemHighlight()

		// *** interview JS [START]
		// toBeOrNotToBe()
		// *** interview JS [END]
	},
	unmounted() {
		window.removeEventListener('scroll', this.handleScroll)
	}
}
</script>