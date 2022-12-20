<template>
	<div class="header">
		<div id="top" class="js-block-scroll"></div>

		<div class="topmenu js-topmenu">
			<ul class="theme_change">
				<li class="theme_change__item" v-for="themeItem in themeItems" :key="themeItem.name">
					<a class="theme_change__link" :class="'theme_change__link--type-' + themeItem.class" @click="themeChange(themeItem.name)" href="javascript:void(0);" :title="themeItem.title"></a>
				</li>
			</ul>

			<div class="wrap">
				<ul class="topmenu_list">
					<li class="topmenu_list__item" v-for="menuItem in menuItems" :key="menuItem.id">
						<a :class="{active: (menuItem.id === activeId)}" class="topmenu_list__link js-topmenu-link" :data-link="menuItem.id" @click="scroll(menuItem.id); toggleMobileMenu()" href="javascript:void(0);">{{ menuItem.title }}</a>
					</li>
				</ul>

				<div class="topmenu_mobile">
					<a class="topmenu_mobile__logo" @click="scroll('top'); toggleMobileMenu()"><img src="../assets/i/icons/logo_2.svg" alt="" /></a>

					<div class="topmenu_mobile__toggle" @click="toggleMobileMenu"><span></span></div>
				</div>
			</div>

			<a class="topmenu_phone" href="tel:+359882744430" target="_blank">+359 (88) 27-444-30</a>
		</div>

		<div class="topmenu_fade" @click="toggleMobileMenu"></div>
	</div>
</template>

<script>
export default {
	name: 'Header',
	created () {
		window.addEventListener('scroll', this.handleScroll)

		// check if there is theme at localStorage
		this.themeFromLocalStorage()
	},
	data() {
		return {
			activeId : 'top',
			themeItems: [
				{name: 'theme_standart',        title: 'Default theme',         class: '1'},
				{name: 'theme_black_and_white', title: 'Black & white theme',   class: '2'},
				{name: 'theme_cyperpunk',       title: 'Cyberpunk theme',       class: '3'}
			],
			menuItems: [
				{id: 'top',         title: 'Home'},
				{id: 'projects',    title: 'Projects'},
				{id: 'process',     title: 'Process'},
				{id: 'contacts',    title: 'Contacts'}
			],
		}
	},
	methods: {
		// on scroll
		handleScroll () {
			let blockId         = 'top'
			let itemsProcessed  = 0

			document.querySelectorAll('.js-block-scroll').forEach((e, index, array) => {
				itemsProcessed++

				// change block ID if it's in viewport
				if (window.scrollY > e.offsetTop - 200) {
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
					document.querySelector('.js-topmenu').querySelector('[data-link="' + blockId + '"]').classList.add('active')
				}
			})
		},

		// set theme from localStorage
		themeFromLocalStorage() {
			document.querySelector('html').dataset.theme = localStorage.getItem('theme') ?? ''
		},

		// theme change
		themeChange(themeName) {
			document.querySelector('html').dataset.theme = themeName

			localStorage.setItem('theme', themeName)
		},

		// scroll to the block with ID
		scroll(id) {
			// scroll to element
			document.getElementById(id).scrollIntoView({
				behavior: 'smooth'
			})
		},

		// show/hide mobile menu
		toggleMobileMenu() {
			document.querySelector('html').classList.toggle('topmenu_mobile_active')
		}
	},
	unmounted () {
		window.removeEventListener('scroll', this.handleScroll);
	}
}
</script>