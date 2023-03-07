<template>
	<div class="header">
		<div id="top" class="js-block-scroll"></div>

		<div class="topmenu js-topmenu">
			<ul class="theme_change">
				<li class="theme_change__item" v-for="themeItem in themeItems" :key="themeItem.name">
					<a class="theme_change__link" :class="'theme_change__link--type-' + themeItem.class" @click.prevent="themeChange(themeItem.name)" href="javascript:void(0);" :title="themeItem.title"></a>
				</li>
			</ul>

			<div class="wrap">
				<ul class="topmenu_list">
					<li class="topmenu_list__item" v-for="menuItem in menuItems" :key="menuItem.title">
						<a :class="{active: (menuItem.href | replace('/#', '') === activeId)}"
                            class="topmenu_list__link js-topmenu-link"
                            @click.prevent="scrollTo(menuItem.href); mobileMenuToggle()"
                            :href="menuItem.href">{{ menuItem.title }}
						</a>
					</li>
				</ul>

				<div class="topmenu_mobile">
					<a class="topmenu_mobile__logo" @click.prevent="scrollTo('top'); mobileMenuToggle()"><img src="../assets/i/icons/logo_4.svg" alt=""></a>

					<div class="topmenu_mobile__toggle" @click="mobileMenuToggle"><span></span></div>
				</div>
			</div>

			<a class="topmenu_phone" :href="'tel:' + phone.replace(/[()-]/g, '').replaceAll(' ', '')">{{ phone }}</a>
		</div>

		<div class="topmenu_fade" @click="mobileMenuToggle"></div>

		<div class="clock_list">
			<div class="clock js-clock" data-gmt="7">
				<div class="clock_number clock_number__3">3</div>
				<div class="clock_number clock_number__6">6</div>
				<div class="clock_number clock_number__9">9</div>
				<div class="clock_number clock_number__12">12</div>

				<div class="clock_arrow clock_arrow__seconds js-clock-seconds"></div>
				<div class="clock_arrow clock_arrow__minutes js-clock-minutes"></div>
				<div class="clock_arrow clock_arrow__hours js-clock-hours"></div>

				<div class="clock_numbers"></div>
			</div>

			<div class="clock js-clock" data-gmt="3">
				<div class="clock_number clock_number__3">3</div>
				<div class="clock_number clock_number__6">6</div>
				<div class="clock_number clock_number__9">9</div>
				<div class="clock_number clock_number__12">12</div>

				<div class="clock_arrow clock_arrow__seconds js-clock-seconds"></div>
				<div class="clock_arrow clock_arrow__minutes js-clock-minutes"></div>
				<div class="clock_arrow clock_arrow__hours js-clock-hours"></div>

				<div class="clock_numbers"></div>
			</div>

			<div class="clock js-clock" data-gmt="2">
				<div class="clock_number clock_number__3">3</div>
				<div class="clock_number clock_number__6">6</div>
				<div class="clock_number clock_number__9">9</div>
				<div class="clock_number clock_number__12">12</div>

				<div class="clock_arrow clock_arrow__seconds js-clock-seconds"></div>
				<div class="clock_arrow clock_arrow__minutes js-clock-minutes"></div>
				<div class="clock_arrow clock_arrow__hours js-clock-hours"></div>

				<div class="clock_numbers"></div>
			</div>

			<div class="clock_time">{{ timestamp }}</div>
		</div>
	</div>
</template>

<script>
import mobileMenuToggle from '../assets/js/mobileMenuToggle'
import scrollTo from '../assets/js/scrollTo'
import themeChange from '../assets/js/themeChange'
import themeFromLocalStorage from '../assets/js/themeFromLocalStorage'

import {phone} from '../assets/js/config'

export default {
	name: 'Header',
	beforeUnmount() {
		clearInterval(this.getNow)
	},
	created() {
		window.addEventListener('scroll', this.handleScroll)

		// check if there is theme at localStorage
		this.themeFromLocalStorage()

		setInterval(this.getNow, 1000)
	},
	data() {
		return {
			activeId : '',
			menuItems: [
				{title: 'Home',         href: '/#top'},
				{title: 'About',        href: '/#about'},
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
			],
			timestamp: ''
		}
	},
	methods: {
		mobileMenuToggle,
		scrollTo,
		themeChange,
		themeFromLocalStorage,

		getNow: () => {
			const $clocks = document.querySelectorAll('.js-clock')

			if (!$clocks) return

			const today = new Date()

			$clocks.forEach((e) => {
				const $gmt = e.dataset.gmt ? e.dataset.gmt : 0

				e.querySelector('.js-clock-hours').style.transform     = 'rotate(' + 30 * (today.getUTCHours() + $gmt) + today.getUTCMinutes() / 2 + 'deg)'
				e.querySelector('.js-clock-minutes').style.transform   = 'rotate(' + 6 * today.getUTCMinutes() + 'deg)'
				e.querySelector('.js-clock-seconds').style.transform   = 'rotate(' + 6 * today.getUTCSeconds() + 'deg)'
			})

			// this.timestamp = this.addZero(today.getUTCHours()) + ' | ' + this.addZero(today.getUTCMinutes()) + ' | ' + this.addZero(today.getUTCSeconds())
		},

		addZero: (i) => {
			if (i < 10) {
				i = "0" + i
			}

			return i
		},

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
			const topmenuItem = document.querySelector('.js-topmenu-link[href="' + window.location.pathname + '"]')

			if (!topmenuItem) return

			topmenuItem.classList.add('active')
		}
	},
	mounted() {
		// highlight menu item on inner pages
		this.topmenuItemHighlight()
	},
	unmounted() {
		window.removeEventListener('scroll', this.handleScroll);
	}
}
</script>