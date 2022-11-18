<template>
	<div>
		<div id="top"></div>

		<div class="topmenu" :class="{'active' : toggleMobileMenu}">
			<div class="wrap">
				<ul class="topmenu_list">
					<li class="topmenu_list__item" v-for="(menuItem, index) in menuItems" :key="menuItem.id">
						<a :class="{'active': index === 0}" @click="scroll(menuItem.id); toggleMobileMenu()" href="javascript:void(0);">{{ menuItem.title }}</a>
					</li>
				</ul>

				<div class="topmenu_mobile">
					<a class="topmenu_mobile__logo" @click="scroll('top'); toggleMobileMenu()">
						<img src="../assets/i/icons/logo_2.svg" alt="" />
						<span>foxartbox</span>
					</a>

					<div class="topmenu_mobile__toggle js-topmenu-mobile-toggle" @click="toggleMobileMenu"><span></span></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header',
	created () {
		window.addEventListener('scroll', this.handleScroll)
	},
	data() {
		return {
			menuItems: [
				{id: 'top', title: 'Home'},
				{id: 'projects', title: 'Projects'},
				{id: 'process', title: 'Process'},
				{id: 'contacts', title: 'Contacts'}
			]
		}
	},
	methods: {
		scroll(id) {
			document.getElementById(id).scrollIntoView({
				behavior: 'smooth'
			})
		},
		toggleMobileMenu() {
			document.querySelector('html').classList.toggle('topmenu_mobile_active')
		},
		handleScroll () {
			// Any code to be executed when the window is scrolled
		}
	},
	unmounted () {
		window.removeEventListener('scroll', this.handleScroll);
	}
}
</script>