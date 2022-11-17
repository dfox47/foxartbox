<template>
	<div>
		<div id="top"></div>

		<div class="topmenu" :class="{'active' : showMobileMenu}">
			<div class="wrap">
				<ul class="topmenu_list">
					<li class="topmenu_list__item" v-for="(menuItem, index) in menuItems" :key="menuItem.id">
						<a :class="{'active': index === 0}" class="js-topmenu-mobile-close js-topmenu-link" @click="scroll(menuItem.id)" href="javascript:void(0);">{{ menuItem.title }}</a>
					</li>
				</ul>

				<div class="topmenu_mobile">
					<a class="topmenu_mobile__logo js-topmenu-mobile-close" @click="scroll('top')">
						<img src="../assets/i/icons/logo_2.svg" alt="" />
						<span>foxartbox</span>
					</a>

					<div :class="{'active': isActive}" class="topmenu_mobile__toggle js-topmenu-mobile-toggle" @click="showMobileMenu"><span></span></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header',
	created () {
		window.addEventListener('scroll', this.handleScroll);
	},
	data() {
		return {
			menuItems: [
				{id: 'top', title: 'Home'},
				{id: 'projects', title: 'Projects'},
				{id: 'process', title: 'Process'},
				// {id: 'crew', title: 'Crew'},
				{id: 'contacts', title: 'Contacts'}
			],
			isActive: false
		}
	},
	methods: {
		scroll(id) {
			document.getElementById(id).scrollIntoView({
				behavior: 'smooth'
			});
		},
		showMobileMenu() {
			this.isActive = !this.isActive;
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